import React from 'react';

const DownloadButton = ({ fileName, fileUrl, description }) => {
  const handleClick = async () => {
    try {
      // Ensure the correct full URL is used
      const fullUrl = fileUrl.startsWith('http') ? fileUrl : window.location.origin + fileUrl;
      
      // Fetch the file to ensure it exists and get the correct MIME type
      const response = await fetch(fullUrl);
      if (!response.ok) throw new Error('File not found');

      // Create a Blob from the file response
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download the file. Please check the file URL.');
    }
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
