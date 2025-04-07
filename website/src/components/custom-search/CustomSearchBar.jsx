import React, { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import DocSearch from '@theme-original/SearchBar';
import '@site/src/components/custom-search/css/CustomSearch.css';

const CustomSearchBar = () => {
    const [searchType, setSearchType] = useState('');

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            const searchInput = document.querySelector('.DocSearch-Button');

            if (searchType === 'docs' && searchInput) {
                searchInput.click();
                setTimeout(() => {
                    const searchTerm = document.querySelector('.DocSearch-Input');
                    searchTerm.focus();
                    searchTerm.click();
                }, 100);
            }

            setSearchType('');
        }
    }, [searchType]);

    const handleClick = () => {
        setSearchType('docs');
        if (ExecutionEnvironment.canUseDOM) {
            if (typeof window.analytics !== 'undefined') {
                window.analytics.track('Search Button Click', { searchType: 'docs' });
            }
        }
    };

    return (
        <>
            <div className="custom-segmented-search-option">
                <div
                    className="custom-search-option selected"
                    onClick={handleClick}
                >
                    <img src="/img/search-in-docs-icon.svg" alt="Search" className='doc-search-icon'></img> Search
                </div>
            </div>
            <div style={{ display: 'none' }}>
                <DocSearch />
            </div>
        </>
    );
};

export default CustomSearchBar;
