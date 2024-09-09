// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaHome, FaUser, FaFolderOpen, FaFileAlt } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CustomNavbar = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="/">
//         <img
//           src="your-logo-url.png"
//           width="30"
//           height="30"
//           className="d-inline-block align-top"
//           alt="Logo"
//         />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto">
//           <Nav.Link as={Link} to="/">
//             <FaHome /> Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/about">
//             <FaUser /> About
//           </Nav.Link>
//           <Nav.Link as={Link} to="/project">
//             <FaFolderOpen /> Project
//           </Nav.Link>
//           <Nav.Link as={Link} to="/resume">
//             <FaFileAlt /> Resume
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default CustomNavbar;


// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
// import {

//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

// import './coustomnav.css'
// export default function CustomNavbar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);
//   return (
//     <Navbar
//     expanded={expand}
//     fixed="top"
//     expand="md"
//     className={navColour ? "sticky" : "navbar"}
//   >
//     <Container>
//       <Navbar.Brand href="/" className="d-flex">
//         <img src={''} className="img-fluid logo" alt="brand" />
//       </Navbar.Brand>
//       <Navbar.Toggle
//         aria-controls="responsive-navbar-nav"
//         onClick={() => {
//           updateExpanded(expand ? false : "expanded");
//         }}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </Navbar.Toggle>
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="ms-auto" defaultActiveKey="#home">
//           <Nav.Item>
//             <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//               <AiOutlineHome  /> HOME
//             </Nav.Link>
//           </Nav.Item>

//           <Nav.Item>
//             <Nav.Link
//               as={Link}
//               to="/about"
//               onClick={() => updateExpanded(false)}
//             >
//               <AiOutlineUser  /> ABOUT
//             </Nav.Link>
//           </Nav.Item>

//           <Nav.Item>
//             <Nav.Link
//               as={Link}
//               to="/project"
//               onClick={() => updateExpanded(false)}
//             >
//               <AiOutlineFundProjectionScreen
//                 
//               />{" "}
//               PROJECTS
//             </Nav.Link>
//           </Nav.Item>

//           <Nav.Item>
//             <Nav.Link
//               as={Link}
//               to="/resume"
//               onClick={() => updateExpanded(false)}
//             >
//               <CgFileDocument  /> RESUME
//             </Nav.Link>
//           </Nav.Item>

//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>  )
// }



// import React, { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-scroll';
// import {

//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";
// import './coustomnav.css'

// const ResponsiveNavbar = () => {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);
//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }
//   window.addEventListener("scroll", scrollHandler);
//   return (
//     <Navbar expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand href="#home" className='brand'>V.P</Navbar.Brand>
//         <Navbar.Toggle 
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>        <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as="span">
//               <Link
//                 to="home"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 data-replace="Home" // Add the data-replace attribute
//               ><AiOutlineHome /><span className='navsty'>Home</span>  
                
//               </Link>
//             </Nav.Link>
//             <Nav.Link as="span">
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//               ><AiOutlineUser />
//                 About
//               </Link>
//             </Nav.Link>
//             <Nav.Link as="span">
//               <Link
//                 to="project"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//               ><AiOutlineFundProjectionScreen />
//                 Project
//               </Link>
//             </Nav.Link>
//             <Nav.Link as="span">
//               <Link
//                 to="resume"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//               ><CgFileDocument />
//                 Resume
//               </Link>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default ResponsiveNavbar;

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import './coustomnav.css';

const ResponsiveNavbar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expand="lg" sticky="top" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="#home" className='brand'>V.P</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto"> {/* Center the nav links */}
            <Nav.Link as="span">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                data-replace="Home"
              >
                <AiOutlineHome /><span className='navsty'>Home</span>  
              </Link>
            </Nav.Link>
            <Nav.Link as="span">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <AiOutlineUser /> About
              </Link>
            </Nav.Link>
            <Nav.Link as="span">
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <AiOutlineFundProjectionScreen /> Project
              </Link>
            </Nav.Link>
            <Nav.Link as="span">
              <Link
                to="resume"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <CgFileDocument /> Resume
              </Link>
            </Nav.Link>
          </Nav>
          <Nav> {/* GitHub link on the right */}
            <Nav.Link href="https://github.com/pradeepanv03" target="_blank" className="github-link">
              <FaGithub size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;


