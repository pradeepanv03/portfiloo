// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CustomNavbar from './CustomNavbar';
// import Home from './Home';
// import About from './About';
// import Project from './Project';
// import Resume from './Resume';
// import './App.css'
// const App = () => {
//   return (
//     <>
//     <Router>
//       <CustomNavbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//     </Router>

//     </>
//   );
// };

// export default App;


// import React from 'react'
// import CustomNavbar from './CustomNavbar'
// export default function App() {
//   return (
//     <>
//       <CustomNavbar />
//     </>
//   )
// }


import React, { useState, useEffect } from 'react';
import Home from './Home'
import About from './About'
import Project from './Project'
import CustomNavbar from './CustomNavbar'
import Resume from './Resume'
import './App.css'
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

export default function App() {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <>
      <CustomNavbar />
      <Home />
      <About />
      <Project />
      <Resume />
      {showButton && <ScrollToTop />}
<Footer />
    </>
  )
}

