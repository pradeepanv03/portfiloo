// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <nav className="menu">
//         <NavLink to="/" end className="nav" activeclassname="active">About Us</NavLink>
//         <NavLink to="/portfolio" className="nav" activeclassname="active">Portfolio</NavLink>
//         <NavLink to="/services" className="nav" activeclassname="active">Services & Pricing</NavLink>
//         <NavLink to="/resume" className="nav" activeclassname="active">Resume</NavLink>
//         <NavLink to="/products" className="nav" activeclassname="active">Products</NavLink>
//         <NavLink to="/blog" className="nav" activeclassname="active">Blog</NavLink>
//         <NavLink to="/contact" className="nav" activeclassname="active">Contact</NavLink>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import Sidebar from './Sidebar';
// import MainContent from './MainContent';
// import './App.css';

// function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <MainContent />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import About from './About';
// import Portfolio from './Portfolio';
// import Services from './Services';
// import Resume from './Resume';
// import Products from './Products';
// import Blog from './Blog';
// import Contact from './Contact';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Sidebar />
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<About />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/resume" element={<Resume />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import About from './About';
// import Portfolio from './Portfolio';
// import Services from './Services';
// import Resume from './Resume';
// import Products from './Products';
// import Blog from './Blog';
// import Contact from './Contact';
// import './App.css';
// import { ColorProvider } from './ColorContext';

// function App() {
//   return (
//     <ColorProvider>
//       <Router>
//         <div className="app-container">
//           <Sidebar />
//           <div className="main-content">
//             <Routes>
//               <Route path="/" element={<About />} />
//               <Route path="/portfolio" element={<Portfolio />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/resume" element={<Resume />} />
//               <Route path="/" element={<Products />} />
//               <Route path="/blog" element={<Blog />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </ColorProvider>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './About';
import Services from './Services';
import Resume from './Resume';
import Products from './Products';
import Contact from './Contact';
import { ColorProvider } from './ColorContext';
import SettingsMenu from './SettingsMenu';
import Project from './Project';
import SkilSet from './SkilSet';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
const appContainerStyle = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: isMobile ? 'column-reverse' : 'row',
  paddingBottom: isMobile ? '60px' : '0px', // avoid overlap with fixed bottom nav
};

  return (
    <ColorProvider>
      <Router>
        <div style={appContainerStyle}>
          <Sidebar isMobile={isMobile}/>
          <div className="main-content" style={{ flex: 1 ,height:"100vh", overflow:"scroll"}}>
            <SettingsMenu />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skill-set" element={<SkilSet />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ColorProvider>
  );
}

export default App;




  // <ColorProvider>
  //     <Router>
  //       <div className="app-container">
  //         <Sidebar />
  //         <div className="main-content">
  //           <SettingsMenu />
  //           <Routes>
  //             <Route path="/" element={<About />} />
  //             <Route path="/services" element={<Services />} />
  //             <Route path="/resume" element={<Resume />} />
  //             <Route path="/products" element={<Products />} />
  //             <Route path="/contact" element={<Contact />} />
  //           </Routes>
  //         </div>
  //       </div>
  //     </Router>
  //   </ColorProvider>