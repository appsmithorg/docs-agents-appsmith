import React, { useState } from 'react';
import DocSearch from '@theme-original/SearchBar';
import '@site/src/components/custom-search/css/CustomSearch.css';

export default function CustomSearchBarWrapper() {
  const [selected, setSelected] = useState(0);
  const segments = []; // keep empty for now

  return (
    <div className="custom-search-container">
      {segments.length > 0 && (
        <div className="custom-segmented-search-option">
          {segments.map((label, index) => (
            <div
              key={index}
              className={`custom-search-option ${selected === index ? 'selected' : ''}`}
              onClick={() => setSelected(index)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
      <div className="search-bar-wrapper">
        <DocSearch />
      </div>
    </div>
  );
}
