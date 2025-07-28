// import React, { useContext } from 'react';
// import { ColorContext } from './ColorContext';

// const About = () => {
//   const { color } = useContext(ColorContext);

//   return (
//     <div>
//       <h1 style={{ color }}>About Us</h1>
//       <p>This is about page content.</p>
//     </div>
//   );
// };

// export default About;

// import React from 'react';

// const skills = [
//   { title: "Vanilla JavaScript", icon: "🟩", desc: "Built on HTML5, Sass, and Bootstrap 5." },
//   { title: "Angular, React & Vue", icon: "🔺⚛️✅", desc: "Built on HTML5, Sass, and Bootstrap 5." },
//   { title: "Node.js", icon: "🟢", desc: "Built on HTML5, Sass, and Bootstrap 5." },
//   { title: "Python & Django", icon: "🐍", desc: "Built on HTML5, Sass, and Bootstrap 5." },
//   { title: "PHP", icon: "🐘", desc: "Built on HTML5, Sass, and Bootstrap 5." },
//   { title: "npm, Gulp & Grunt", icon: "📦⚙️", desc: "Built on HTML5, Sass, and Bootstrap 5." },
//   { title: "HTML & CSS", icon: "🌐", desc: "Built on HTML5, Sass, and Bootstrap 5." },
//   { title: "Sass & LESS", icon: "🎨", desc: "Built on HTML5, Sass, and Bootstrap 5." },
// ];

// const styles = {
//   section: {
//     padding: '50px 20px',
//     backgroundColor: '#f7f7f7',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     fontSize: '28px',
//     textAlign: 'center',
//     marginBottom: '10px',
//     color: '#333',
//   },
//   intro: {
//     maxWidth: '600px',
//     margin: '0 auto 40px',
//     textAlign: 'center',
//     color: '#666',
//     fontSize: '16px',
//   },
//   link: {
//     color: '#007bff',
//     textDecoration: 'none',
//     margin: '0 5px',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//     gap: '20px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '10px',
//     padding: '20px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     textAlign: 'center',
//     transition: 'transform 0.3s ease',
//   },
//   icon: {
//     fontSize: '30px',
//     marginBottom: '10px',
//   },
//   title: {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     marginBottom: '8px',
//     color: '#333',
//   },
//   desc: {
//     fontSize: '14px',
//     color: '#777',
//   }
// };

// const Skills = () => {
//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>What I do</h2>
//       <p style={styles.intro}>
//         I have more than 10 years experience building software for clients all over the world. Want to find out more?
//         <a href="#" style={styles.link}> online resume </a>
//         and
//         <a href="#" style={styles.link}> project portfolio</a>.
//       </p>

//       <div style={styles.grid}>
//         {skills.map((skill, idx) => (
//           <div key={idx} style={styles.card}>
//             <div style={styles.icon}>{skill.icon}</div>
//             <h3 style={styles.title}>{skill.title}</h3>
//             <p style={styles.desc}>{skill.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React, { useEffect, useState, useContext } from 'react';
import { ColorContext } from './ColorContext';
import { FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const { color } = useContext(ColorContext);
    const navigate = useNavigate();

 const titles = ['Developer', 'Engineer',];
  const [loopIndex, setLoopIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = `Pradeepan ${titles[loopIndex % titles.length]}`;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
        }
      } else {
        setDisplayedText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setLoopIndex((loopIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex]);


  const wrapperStyle = {
    backgroundColor: '#f7f7f7',
    padding: '50px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
    margin: '0 auto',
  };

  const headingStyle = {
    color: color,
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    textAlign: 'justify',
  };

  const highlightStyle = {
    color: color,
    fontWeight: '600',
  };

  const projectBoxStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const projectTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={wrapperStyle}>
     <div className="container py-5">
      <div className="row align-items-center">
        {/* Left content */}
        <div className="col-md-6 text-center text-md-start">
          <h4 className="fw-light mb-2">HI, I'M</h4>

          <h1 className="fw-bold mb-3" style={{ fontSize: '3rem', color }}>
            {displayedText}
            <span
              style={{
                borderRight: `2px solid ${color}`,
                marginLeft: '4px',
                animation: 'blink 1s step-end infinite',
              }}
            />
          </h1>

          <p className="mb-4">
  Hi, I’m a front-end developer who loves building sleek and functional web apps with <strong>React.js</strong>. Feel free to browse my portfolio, check out some live projects, or view my resume.
</p>


          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mb-4">
            <button className="btn btn-info text-white px-4 py-2 fw-bold">
              → View Portfolio
            </button>

            <button
              onClick={() => navigate('/resume')}
              className="btn btn-dark px-4 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
            >
              <FaFileAlt /> View Resume
            </button>
          </div>

          {/* Stats */}
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-5">
            <div className="text-center text-md-start">
              <h2 className="text-info fw-bold">2+</h2>
              <p className="mb-0">Years of Experience</p>
            </div>
            <div className="text-center text-md-start">
              <h2 className="text-info fw-bold">2</h2>
              <p className="mb-0">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Right image */}
<div className="col-md-6 text-center mt-4 mt-md-0" style={{ position: 'relative' }}>
  {/* Rotating background layer */}
  <div
    style={{
      width: '320px',
      height: '320px',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '20px',
      background: color,
      animation: 'rotate-bg 3s infinite alternate ease-in-out',
      zIndex: 0,
    }}
  ></div>

  {/* Foreground fixed content */}
  <div
    style={{
      width: '320px',
      height: '320px',
      padding: '10px',
      borderRadius: '20px',
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'white',
      border: `3px solid ${color}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1
      style={{
        fontFamily: "'VT323', monospace",
        fontSize: '12rem',
        // fontWeight: 'bold',
        color: color,
        margin: 0,
      }}
    >
      V.P
    </h1>
  </div>

  {/* Keyframes for rotating background */}
  <style>
    {`
      @keyframes rotate-bg {
        0% { transform: translateX(-50%) rotate(10deg); }
        100% { transform: translateX(-50%) rotate(15deg); }
      }
    `}
  </style>
</div>





    </div>
    </div>



      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        I’m a <span style={highlightStyle}>React.js developer</span> with over <span style={highlightStyle}>2 years of hands-on experience</span>
        in building responsive and user-friendly web applications. I focus on writing clean code, building reusable components, and integrating with backend APIs to deliver full-featured solutions.
      </p>

      <p style={paragraphStyle}>
        I’ve successfully completed <span style={highlightStyle}>two major React projects</span> — a property sale platform and an admin dashboard —
        both involving dynamic routing, form handling, API integration, and user interface enhancements.
      </p>
<div style={projectBoxStyle}>
  <div style={projectTitleStyle}>🏡 Pondy Property – Real Estate UI (Web + Mobile)</div>
  <p style={paragraphStyle}>
    Developed a responsive, app-like user interface using <strong>React.js</strong> and <strong>Bootstrap</strong> for a real estate platform. Integrated <strong>Google Maps with marker clustering</strong> to visualize properties in Pondicherry. Designed smart search filters, custom dropdowns, dynamic modals, and card-based property listings optimized for both web and mobile users.
  </p>
</div>

<div style={projectBoxStyle}>
  <div style={projectTitleStyle}>🛠️ Admin Dashboard – Front-End Panel</div>
  <p style={paragraphStyle}>
    Built a front-end dashboard with <strong>OTP-based login</strong>, collapsible sidebar navigation, and conditional rendering for different admin tools. Features include dynamic data display, filterable reports, and custom theming using <strong>React Context</strong>. Ensured full mobile responsiveness with clean UI components styled using Bootstrap and inline styles.
  </p>
</div>
<div style={projectBoxStyle}>
  <div style={projectTitleStyle}>🏠 Rent Pondy – Property Listing UI</div>
  <p style={paragraphStyle}>
    Designed and developed a responsive front-end for a rental property platform using <strong>React.js</strong> and <strong>Bootstrap</strong>. Features include user-friendly forms, advanced filters, and property cards displaying details like BHK, area, rent, and amenities. Built with mobile-first design principles to provide an app-like experience for renters and owners.
  </p>
</div>

<div style={projectBoxStyle}>
  <div style={projectTitleStyle}>📊 Admin Panel – Rental Dashboard</div>
  <p style={paragraphStyle}>
    Created a clean and functional admin dashboard interface with <strong>login authentication</strong>, <strong>property status updates</strong>, and user management. Implemented conditional rendering, responsive layout, and reusable UI components to streamline rental data handling. Integrated filter controls and modals for quick edits and reviews.
  </p>
</div>

    </div>
  );
};

export default About;
