// import React from 'react';
// import resumePdf from './Assests/pradeepanv.pdf'; // ✅ matches folder name

// const Resume = () => {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = resumePdf;
//     link.download = 'resume.pdf';
//     link.click();
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' , height:"100vh", overflow:"scroll"}} id='resume'>
//       {/* Top Download Button */}
//       <button className='btn-primary' onClick={handleDownload} style={{ marginBottom: '20px', border:'none', height:'60px', width:'auto', padding:'15px',boxSizing:'border-box', background:'#397ec0' }}>
//         Download Resume
//       </button>

//       {/* Display Resume PDF */}
//       <div>
//         <iframe
//           src={resumePdf}
//           width="80%"
//           height="600px"
//           title="Resume PDF"
//           style={{ border: 'none', marginBottom: '20px' }}
//         />
//       </div>

//       {/* Bottom Download Button */}
//       <button className='btn-primary' onClick={handleDownload} style={{ marginTop: '20px', border:'none', height:'60px', width:'auto', padding:'15px',boxSizing:'border-box' }}>
//         Download Resume
//       </button>
//     </div>
//   );
// };

// export default Resume;

import React, { useContext } from "react";
import { ColorContext } from './ColorContext';
import resumePdf from './Assests/pradeepanV.pdf';
const Resume = () => {
    const { color } = useContext(ColorContext);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf';
    link.click();
  };
  const containerStyle = {
    maxWidth: "1000px",
    margin: "30px auto",
    border: "1px solid #ccc",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

  const sectionStyle = {
    padding: "20px",
    borderBottom: "1px solid #ccc",
  };

  const leftColStyle = {
    backgroundColor: "#DEEAF6 ",
    padding: "25px",
  };

  const rightColStyle = {
    padding: "20px",
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center" style={{color}}>RESUME</h1>
             <button className='btn-primary' onClick={handleDownload} style={{ marginBottom: '20px', border:'none', height:'60px', width:'auto', padding:'15px',boxSizing:'border-box', background:'#397ec0' }}>
         Download Resume
       </button>
      <div style={containerStyle}>
        <div className="text-center py-5" style={{background:"#DAE3F4 "}}>
                <h2 className="fw-bold" style={{color}}>V PRADEEPAN</h2>
            <h5 className="text-uppercase text-secondary">React JS Developer</h5>

        </div>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4" style={leftColStyle}>
            <h4 className="fw-bold mb-3" style={{color}}>CONTACT</h4>
            <p>📞 +91 93618 47704</p>
            <p>📍 Cuddalore, Tamilnadu</p>
            <p>📧 pradeepanv03@gmail.com</p>

            <h4 className="fw-bold mt-4" style={{color}}>PROJECT LINK</h4>
            <a
              href="https://ppcpondy.com"
              target="_blank"
              rel="noreferrer"
            >
              https://ppcpondy.com
            </a>
            <br />
            <a
              href="https://rentpondy.com"
              target="_blank"
              rel="noreferrer"
            >
              https://rentpondy.com
            </a>
            <h4 className="fw-bold mt-4" style={{color}}>PORTFLIO LINK</h4>
            <a
              href="https://main--pradeepan.netlify.app/#home"
              target="_blank"
              rel="noreferrer"
            >
              https://main--pradeepan.netlify.app/#home
            </a>
            <h4 className="fw-bold mt-4"style={{color}} >SKILLS</h4>
            <p>
  <strong>FRONT-END SKILLS:</strong>
  <br /> HTML5, CSS3, SASS, Bootstrap, JavaScript (ES6+), Responsive Design
</p>
<p>
  <strong>REACT ECOSYSTEM:</strong>
  <br /> React.js, React Router, React Hooks, Context API, Axios, Form Handling, Component Reusability, State Management
</p>
<p>
  <strong>MAP & UI INTEGRATIONS:</strong>
  <br /> Google Maps API, Marker Clustering, Autocomplete (Google Places), Modals, Multi-step Forms
</p>
<p>
  <strong>VERSION CONTROL & BUILD TOOLS:</strong>
  <br /> Git, GitHub, npm, Webpack
</p>
<p>
  <strong>BACKEND KNOWLEDGE:</strong>
  <br /> Node.js, Express.js (for integration and API testing)
</p>
<p>
  <strong>DATABASE FAMILIARITY:</strong>
  <br /> MongoDB (CRUD and API response handling)
</p>

<h4 className="fw-bold mt-4" style={{ color }}>LANGUAGES</h4>
<ul>
  <li>Tamil</li>
  <li>English</li>
</ul>


            <h4 className="fw-bold mt-4" style={{color}}>EDUCATION</h4>
            <p>
              Bachelor of Engineering
              <br />
              CKCET Cuddalore.
              <br />
              <small>Jun 2015 – 2019</small>
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-8" style={rightColStyle}>
            {/* <h2 className="fw-bold">V PRADEEPAN</h2>
            <h5 className="text-uppercase text-secondary">React JS Developer</h5> */}

            <div style={sectionStyle}>
              <h4 className="fw-bold mt-4" style={{color}} >PROFILE</h4>
              <p>
                Frontend Developer with 2+ years of hands-on experience building
                dynamic, responsive web applications using React.js, JavaScript,
                HTML5, and CSS3. Proficient in managing application state using
                Redux, and experienced in integrating RESTful APIs. Successfully
                delivered real estate platforms such as Pondy Property and Rent
                Property.
              </p>
            </div>

            {/* <div style={sectionStyle}>
              <h4 className="fw-bold mt-4" style={{color}}>WORK EXPERIENCE</h4>
              <h6 className="fw-bold">Frontend Developer</h6>
              <p className="text-muted">
                LEGENDS TECH SOLUTION &nbsp; | &nbsp; July 2023 – Present
              </p>
              <ul>
                <li>
                  Developed and maintained responsive web applications using
                  React.js, focusing on performance, scalability, and reusability.
                </li>
                <li>
                  Implemented Redux for efficient and scalable state management.
                </li>
                <li>
                  <strong>Pondy Property:</strong> A property listing platform
                  focused on sales in the Pondicherry region.
                </li>
                <li>
                  <strong>Rent Property:</strong> A rental property management
                  system.
                </li>
                <li>
                  Created multi-step forms with validations for property data.
                </li>
                <li>
                  Built an admin dashboard to manage listings, status, and approvals.
                </li>
                <li>
                  Integrated RESTful APIs with Axios for dynamic data handling.
                </li>
                <li>
                  Integrated Google Maps API with:
                  <ul>
                    <li>
                      Search by address with autocomplete (Google Places).
                    </li>
                    <li>
                      Map marker display using latitude and longitude.
                    </li>
                    <li>
                      Live capture of geolocation data for each listing.
                    </li>
                  </ul>
                </li>
                <li>
                  Ensured responsive UI across devices using Bootstrap and custom
                  CSS.
                </li>
                <li>
                  Collaborated with backend team for API integration and testing.
                </li>
                <li>
                  Version control with Git and collaboration on GitHub.
                </li>
                <li>Integrated form validation APIs.</li>
                <li>
                  Familiar with build tools like Webpack, npm, and package managers.
                </li>
              </ul>
            </div> */}
            <div style={sectionStyle}>
  <h4 className="fw-bold mt-4" style={{ color }}>WORK EXPERIENCE</h4>
  <h6 className="fw-bold">Frontend Developer</h6>
  <p className="text-muted">
    LEGENDS TECH SOLUTION &nbsp; | &nbsp; July 2023 – Present
  </p>
  <ul>
    <li>
      Designed and developed responsive web applications using <strong>React.js</strong>, ensuring optimal performance, scalability, and maintainability.
    </li>
    <li>
      Architected reusable UI components with clean code and mobile-first responsiveness using <strong>Bootstrap</strong> and <strong>custom CSS</strong>.
    </li>
    <li>
      <strong>Pondy Property:</strong> Led the UI development of a real estate platform with Google Maps integration, smart filters, and cluster-based property search for buyers in the Pondicherry region.
    </li>
    <li>
      <strong>Rent Property:</strong> Built a rental property interface with dynamic listing cards, filterable options, and intuitive UX for renters and owners.
    </li>
    <li>
      Created <strong>multi-step forms</strong> with field-level validation for submitting and editing property data.
    </li>
    <li>
      Developed a fully functional <strong>Admin Dashboard</strong> with secured OTP login, property status management, and user analytics views.
    </li>
    <li>
      Integrated <strong>RESTful APIs</strong> using <strong>Axios</strong> for real-time data rendering and updates.
    </li>
    <li>
      Implemented <strong>Google Maps API</strong> features including:
      <ul>
        <li>Address autocomplete using Google Places</li>
        <li>Map marker rendering with latitude and longitude</li>
        <li>Marker clustering for dense location visualization</li>
        <li>Live geolocation capture per property listing</li>
      </ul>
    </li>
    <li>
      Ensured pixel-perfect UI and responsive design across devices to mimic a native app experience.
    </li>
    <li>
      Collaborated closely with backend developers to align data models and streamline API usage.
    </li>
    <li>
      Used <strong>Git and GitHub</strong> for version control, code reviews, and collaborative workflow.
    </li>
    <li>
      Integrated external APIs for OTP login and form validation workflows.
    </li>
    <li>
      Familiar with build tools like <strong>Webpack</strong> and package managers like <strong>npm</strong> for efficient front-end setup.
    </li>
  </ul>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
