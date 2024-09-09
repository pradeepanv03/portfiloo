import React from 'react';
import resumePdf from './assets/V_PRADEEPAN.pdf'; // Adjust the path as necessary

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }} id='resume'>
      {/* Top Download Button */}
      <button className='btn-primary' onClick={handleDownload} style={{ marginBottom: '20px', border:'none', height:'60px', width:'auto', padding:'15px',boxSizing:'border-box', background:'#397ec0' }}>
        Download Resume
      </button>

      {/* Display Resume PDF */}
      <div>
        <iframe
          src={resumePdf}
          width="80%"
          height="600px"
          title="Resume PDF"
          style={{ border: 'none', marginBottom: '20px' }}
        />
      </div>

      {/* Bottom Download Button */}
      <button className='btn-primary' onClick={handleDownload} style={{ marginTop: '20px', border:'none', height:'60px', width:'auto', padding:'15px',boxSizing:'border-box' }}>
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
