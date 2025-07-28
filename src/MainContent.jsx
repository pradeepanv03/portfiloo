// import React from 'react';
// import './MainContent.css';

// function MainContent() {
//   return (
//     <main className="main-content">
//       <p className="intro">HI, I’M A FREELANCER</p>
//       <h1 className="name-highlight">Des</h1>
//       <p className="description">
//         I’m a software engineer specializing in scalable web apps. Explore my{' '}
//         <a href="#">blog</a>, <a href="#">project portfolio</a> and{' '}
//         <a href="#">online resume</a>.
//       </p>
//       <div className="buttons">
//         <button className="portfolio-btn">→ View Portfolio</button>
//         <button className="resume-btn">🗂 View Resume</button>
//       </div>
//       <div className="stats">
//         <div><strong>5</strong><br />Years<br />Experience</div>
//         <div><strong>110</strong><br />Projects<br />Completed</div>
//         <div><strong>6k</strong><br />Clients<br />Worldwide</div>
//       </div>
//     </main>
//   );
// }

// export default MainContent;


import React, { useContext, useState } from 'react';
import { ColorContext } from './ColorContext';
import './MainContent.css';

function MainContent() {
  const { color, setColor } = useContext(ColorContext);
  const [showColors, setShowColors] = useState(false);

  return (
    <main className="main-content">
      {/* Settings icon top-right */}
      <div className="settings-icon" onClick={() => setShowColors(!showColors)}>⚙️</div>

      {/* Color options */}
      {showColors && (
        <div className="color-options">
          <button onClick={() => setColor('red')}>Red</button>
          <button onClick={() => setColor('blue')}>Blue</button>
          <button onClick={() => setColor('green')}>Green</button>
        </div>
      )}

      <p className="intro">HI, I’M A FREELANCER</p>
      <h1 className="name-highlight" style={{ color }}>Des</h1>
      <p className="description">
        I’m a software engineer specializing in scalable web apps. Explore my{' '}
        <a href="#">blog</a>, <a href="#">project portfolio</a> and{' '}
        <a href="#">online resume</a>.
      </p>
      <div className="buttons">
        <button className="portfolio-btn">→ View Portfolio</button>
        <button className="resume-btn">🗂 View Resume</button>
      </div>
      <div className="stats">
        <div><strong>5</strong><br />Years<br />Experience</div>
        <div><strong>110</strong><br />Projects<br />Completed</div>
        <div><strong>6k</strong><br />Clients<br />Worldwide</div>
      </div>
    </main>
  );
}

export default MainContent;
