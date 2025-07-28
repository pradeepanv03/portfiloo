
// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   FaUser, FaBriefcase, FaFileAlt, FaBoxOpen, FaEnvelope,
//   FaFacebook, FaInstagram, FaTimes, FaLinkedin
// } from 'react-icons/fa';
// import { ColorContext } from './ColorContext';

// const Sidebar = () => {
//   const { color } = useContext(ColorContext);
//   const isMobile = window.innerWidth <= 768;

//   const sidebarStyle = {
//     width: isMobile ? '100%' : '280px',
//     background: '#fff',
//     borderTop: isMobile ? '1px solid #eee' : 'none',
//     borderRight: isMobile ? 'none' : '1px solid #eee',
//     display: 'flex',
//     flexDirection: isMobile ? 'row' : 'column',
//     justifyContent: isMobile ? 'space-around' : 'space-between',
//     alignItems: 'center',
//     padding: isMobile ? '10px' : '20px',
//     height: isMobile ? '60px' : '100vh',
//     position: isMobile ? 'fixed' : 'relative',
//     bottom: isMobile ? 0 : 'auto',
//     left: 0,
//     zIndex: 1000,
//   };

//   const navStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     textDecoration: 'none',
//     color: '#333',
//     borderRadius: '10px',
//     padding: isMobile ? '10px' : '12px 16px',
//     fontSize: isMobile ? '20px' : '16px',
//     justifyContent: 'center',
//     transition: 'all 0.3s ease',
//   };

//   const activeNavStyle = {
//     backgroundColor: '#85b9ad',
//     color: '#fff',
//   };

//   return (
//     <aside style={sidebarStyle}>
//       {!isMobile && (
//         <div style={{ textAlign: 'center' }} className='pb-5'>
//           <img src="/profile.jpg" alt="Profile" style={{
//             width: '90px', height: '90px', borderRadius: '50%', marginBottom: '10px'
//           }} />
//           <h2 style={{ color }}>{`Pradeepan V`}</h2>
//           <p>Junior Software Engineer</p>
//           <div style={{
//             display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px', color: '#888'
//           }}>
//             <FaFacebook />
//             <FaInstagram />
//             <FaTimes />
//             <FaLinkedin />
//           </div>
//         </div>
//       )}

//       {/* Menu */}
//       <nav style={{
//         display: 'flex',
//         flexDirection: isMobile ? 'row' : 'column',
//         gap: isMobile ? '0' : '12px',
//         width: isMobile ? '100%' : 'auto',
//         justifyContent: isMobile ? 'space-around' : 'unset',
//         alignItems: 'center'
//       }}>
//         <NavLink to="/" end style={({ isActive }) => ({
//           ...navStyle, ...(isActive ? activeNavStyle : {})
//         })}>
//           <FaUser /> {!isMobile && <span>About Us</span>}
//         </NavLink>

//         <NavLink to="/services" style={({ isActive }) => ({
//           ...navStyle, ...(isActive ? activeNavStyle : {})
//         })}>
//           <FaBriefcase /> {!isMobile && <span>Project</span>}
//         </NavLink>

//         <NavLink to="/resume" style={({ isActive }) => ({
//           ...navStyle, ...(isActive ? activeNavStyle : {})
//         })}>
//           <FaFileAlt /> {!isMobile && <span>Resume</span>}
//         </NavLink>

//         <NavLink to="/products" style={({ isActive }) => ({
//           ...navStyle, ...(isActive ? activeNavStyle : {})
//         })}>
//           <FaBoxOpen /> {!isMobile && <span>Skil set</span>}
//         </NavLink>

//         <NavLink to="/contact" style={({ isActive }) => ({
//           ...navStyle, ...(isActive ? activeNavStyle : {})
//         })}>
//           <FaEnvelope /> {!isMobile && <span>Contact</span>}
//         </NavLink>
//       </nav>

//       {!isMobile && (
//         <div style={{ textAlign: 'center', marginTop: 'auto' }}>
//           <button style={{
//             backgroundColor: '#85b9ad',
//             color: 'white',
//             border: 'none',
//             padding: '12px 20px',
//             borderRadius: '20px',
//             fontSize: '16px',
//             cursor: 'pointer'
//           }}>
//             Hire Me
//           </button>
//         </div>
//       )}
//     </aside>
//   );
// };

// export default Sidebar;



import { ColorContext } from './ColorContext';
import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaBoxOpen,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaLinkedin,
} from 'react-icons/fa';

const Sidebar = ({ isMobile }) => {
    const { color } = useContext(ColorContext);
      const navigate = useNavigate();

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const sidebarStyle = {
    width: isMobile ? '100%' : '280px',
    background: '#fff',
    borderRight: isMobile ? 'none' : '1px solid #eee',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: isMobile ? '10px 0' : '20px',
    height: isMobile ? 'auto' : '100vh',
    boxShadow: isMobile ? '0 -1px 4px rgba(0,0,0,0.1)' : 'none',
    fontFamily: 'Poppins, sans-serif',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: isMobile ? '10px 0' : '10px 16px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: 500,
    width: isMobile ? '100%' : 'auto',
    justifyContent: isMobile ? 'center' : 'flex-start',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  };

  const activeNavStyle = {
    backgroundColor: color,
    color: '#fff',
  };

  const hoverStyle = {
    backgroundColor: color,
    color: '#fff',
  };

  const navItems = [
    { to: '/', icon: <FaUser />, label: 'About Us' },
    { to: '/project', icon: <FaBriefcase />, label: 'Project' },
    { to: '/resume', icon: <FaFileAlt />, label: 'Resume' },
    { to: '/skill-set', icon: <FaBoxOpen />, label: 'Skil set' },
    { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  const socialIcons = [
    { name: 'facebook', icon: <FaFacebook /> },
    { name: 'instagram', icon: <FaInstagram /> },
    { name: 'times', icon: <FaTimes /> },
    { name: 'linkedin', icon: <FaLinkedin /> },
  ];

  return (
    <aside style={sidebarStyle}>
      {/* Top Profile */}
      {!isMobile && (
        <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
          <img
            src="/profile.jpg"
            alt="Profile"
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              marginBottom: '10px',
            }}
          />
          <h2 style={{ color }}>Pradeepan V</h2>
          <p>Junior Software Engineer</p>

          {/* Social Icons with hover */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
            {socialIcons.map((item, index) => (
              <span className='p-1'
                key={index}
                style={{
                  color: hoveredIcon === item.name ? '#85b9ad' : '#888',
                  fontSize: '20px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',                }}
                     onMouseEnter={(e) => {
              if (!e.currentTarget.classList.contains('active')) {
                Object.assign(e.currentTarget.style, hoverStyle);
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.classList.contains('active')) {
                Object.assign(e.currentTarget.style, { backgroundColor: 'transparent', color: '#333' });
              }
            }}
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          gap: isMobile ? '0' : '12px',
          width: '100%',
          justifyContent: isMobile ? 'space-around' : 'unset',
          alignItems: 'center',
        }}
      >
        {navItems.map((item, index) => (
          <NavLink className="w-100"
            key={index}
            to={item.to}
            end={item.to === '/'}
            style={({ isActive }) => ({
              ...navStyle,
              ...(isActive ? activeNavStyle : {}),
            })}
            onMouseEnter={(e) => {
              if (!e.currentTarget.classList.contains('active')) {
                Object.assign(e.currentTarget.style, hoverStyle);
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.classList.contains('active')) {
                Object.assign(e.currentTarget.style, { backgroundColor: 'transparent', color: '#333' });
              }
            }}
          >
            {item.icon} {!isMobile && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Hire Me Button */}
      {!isMobile && (
        <div style={{ textAlign: 'center', marginTop: 'auto' }}>
          <button
            style={{
              backgroundColor: color,
              color: 'white',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '20px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '30px',
            }}
            onClick={() => navigate('/contact')}
          >
            Hire Me
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
