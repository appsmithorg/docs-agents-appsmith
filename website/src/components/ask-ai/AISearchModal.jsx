import React, { useEffect, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './css/AISearch.css';

const AISearchModal = ({ show, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const checkIfClickedOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && show) {
          closeModal();
        }
      };
      document.addEventListener('mousedown', checkIfClickedOutside);
      return () => document.removeEventListener('mousedown', checkIfClickedOutside);
    }
  }, [show, closeModal]);

  return (
    <div className={`ai-search-modal ${show ? 'show' : ''}`}>
      <div className="ai-search-modal-content no-padding" ref={modalRef}>
        <iframe
          src="https://harshil.appsmithai.com/app/ai-agent/page-684b9653035cea55ce871368?embed=true"
          title="Ask AI Agent"
          width="100%"
          height="100%"
          style={{
            border: 'none',
            margin: 0,
            padding: 0,
            display: 'block',
          }}
          allow="clipboard-write"
        ></iframe>
      </div>
    </div>
  );
};

export default AISearchModal;
