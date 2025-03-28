import React from 'react';

const DownloadButton = ({ fileName, fileUrl, description }) => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      title={description}
      style={{
        padding: '10px 16px',
        backgroundColor: '#3578e5',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        margin: '8px 0'
      }}
    >
      ⬇ Download {fileName}
    </button>
  );
};

export default DownloadButton;
