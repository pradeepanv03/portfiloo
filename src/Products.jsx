// import React from 'react'

// export default function Products() {
//   return (
//     <div>Products</div>
//   )
// }


// import React, { useContext } from 'react';
// import { ColorContext } from './ColorContext';

// const Services = () => {
//     const { color } = useContext(ColorContext);

//   const wrapperStyle = {
//     backgroundColor: '#f7f7f7',
//     color: '#ccc',
//     padding: '50px 20px',
//     fontFamily: 'Segoe UI, sans-serif',
//         maxWidth: '1000px',

//   };

//   const headingStyle = {
//     color: color,
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginTop: '2rem',
//   };

//   const gridContainerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1rem',
//     margin: '1.5rem 0 3rem',
//   };

//   const gridItemStyle = {
//     backgroundColor: '#fff',
//     padding: '1rem 2rem',
//     borderRadius: '8px',
//     color: 'black',
//     fontWeight: 600,
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//     flex: '1 1 20%',
//     textAlign: 'center',
//     fontSize: '1rem',
//   };

// const skills = [
//   'HTML5',
//   'CSS3',
//   'JavaScript (ES6+)',
//   'React.js',
//   'React Router',
//   'React Hooks (useState, useEffect, useRef)',
//   'Bootstrap',
//   'React-Bootstrap',
//   'Axios',
//   'Node.js',
//   'Express.js',
//   'MongoDB',
//   'MySQL',
//   'RESTful APIs',
//   'Git',
//   'GitHub',
//   'Sass',
//   'Responsive Design',
//   'LocalStorage & SessionStorage',
//   'Form Validation',
//   'Conditional Rendering',
//   'Dynamic Forms',
//   'Component Reusability',
//   'Google Maps API Integration',
//   'Debugging & DevTools'
// ];
// const tools = [
//   'Windows',
//   'VS Code',
//   'Postman',
//   'Chrome DevTools',
//   'Git CLI',
//   'NPM',
//   'Netlify',
//   'Vercel',
//   'MongoDB Compass',
//   'Figma (for UI reference)',
// ];

//   return (
//         <div className="container-fluid">

//     <div style={wrapperStyle}>

//       <h2 style={headingStyle}>Skillset</h2>
//       <div style={gridContainerStyle}>
//         {skills.map((skill, idx) => (
//           <div key={idx} style={gridItemStyle}>
//             {skill}
//           </div>
//         ))}
//       </div>

//       <h2 style={headingStyle}>
//         <span style={{color}}>Tools</span> I use
//       </h2>
//       <div style={gridContainerStyle}>
//         {tools.map((tool, idx) => (
//           <div key={idx} style={gridItemStyle}>
//             {tool}
//           </div>
//         ))}
//       </div>
//     </div>
//         </div>

//   );
// };

// export default Services;


import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaWindows,
  FaChrome,
  FaFigma,
  FaNpm,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAxios,
  SiSass,
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiRedux,
  SiGooglemaps,
} from 'react-icons/si';

const Services = () => {
  const { color } = useContext(ColorContext);

  const wrapperStyle = {
    backgroundColor: '#f7f7f7',
    color: '#ccc',
    padding: '50px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '1000px',
  };

  const headingStyle = {
    color: color,
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '2rem',
  };

  const gridContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    margin: '1.5rem 0 3rem',
  };

  const gridItemStyle = {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    color: 'black',
    fontWeight: 600,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    flex: '1 1 20%',
    textAlign: 'center',
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const skillIcons = {
    HTML5: <FaHtml5 size={24} color="#e34c26" />,
    CSS3: <FaCss3Alt size={24} color="#264de4" />,
    'JavaScript (ES6+)': <FaJsSquare size={24} color="#f0db4f" />,
    'React.js': <FaReact size={24} color="#61DBFB" />,
    'React Router': <FaReact size={24} />,
    'React Hooks (useState, useEffect, useRef)': <FaReact size={24} />,
    Bootstrap: <FaBootstrap size={24} color="#563d7c" />,
    'React-Bootstrap': <FaBootstrap size={24} />,
    Axios: <SiAxios size={24} color="#5a29e4" />,
    'Node.js': <FaNodeJs size={24} color="#3C873A" />,
    'Express.js': <SiExpress size={24} />,
    MongoDB: <SiMongodb size={24} color="#4DB33D" />,
    MySQL: <SiMysql size={24} color="#00758f" />,
    'RESTful APIs': <FaDatabase size={24} />,
    Git: <FaGitAlt size={24} color="#f1502f" />,
    GitHub: <FaGithub size={24} />,
    Sass: <SiSass size={24} color="#cc6699" />,
    'Responsive Design': <FaReact size={24} />,
    'LocalStorage & SessionStorage': <FaDatabase size={24} />,
    'Form Validation': <FaReact size={24} />,
    'Conditional Rendering': <FaReact size={24} />,
    'Dynamic Forms': <FaReact size={24} />,
    'Component Reusability': <FaReact size={24} />,
    'Google Maps API Integration': <SiGooglemaps size={24} />,
    'Debugging & DevTools': <FaChrome size={24} />,
  };

  const toolIcons = {
    Windows: <FaWindows size={24} />,
    'VS Code': <SiVisualstudiocode size={24} color="#0078d7" />,
    Postman: <SiPostman size={24} color="#ff6c37" />,
    'Chrome DevTools': <FaChrome size={24} color="#4285F4" />,
    'Git CLI': <FaGitAlt size={24} />,
    NPM: <FaNpm size={24} color="#cc3534" />,
    Netlify: <SiNetlify size={24} color="#00C7B7" />,
    // Vercel: <SiVercel size={24} />,
    'MongoDB Compass': <SiMongodb size={24} />,
    'Figma (for UI reference)': <FaFigma size={24} />,
  };

  const skills = Object.keys(skillIcons);
  const tools = Object.keys(toolIcons);

  return (
    <div className="container-fluid">
      <div style={wrapperStyle}>
        <h2 style={headingStyle}>Skillset</h2>
        <div style={gridContainerStyle}>
          {skills.map((skill, idx) => (
            <div key={idx} style={gridItemStyle}>
              {skillIcons[skill]}
              <div style={{ marginTop: '0.5rem' }}>{skill}</div>
            </div>
          ))}
        </div>

        <h2 style={headingStyle}>
          <span style={{ color }}>Tools</span> I use
        </h2>
        <div style={gridContainerStyle}>
          {tools.map((tool, idx) => (
            <div key={idx} style={gridItemStyle}>
              {toolIcons[tool]}
              <div style={{ marginTop: '0.5rem' }}>{tool}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
