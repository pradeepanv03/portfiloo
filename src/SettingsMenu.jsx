// import React, { useContext, useState } from 'react';
// import { ColorContext } from './ColorContext';
// import { FaCog } from 'react-icons/fa';

// const SettingsMenu = () => {
//   const { setColor } = useContext(ColorContext);
//   const [showColors, setShowColors] = useState(false);

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: '50%',
//         right: showColors ? '0px' : '-160px',
//         transform: 'translateY(-50%)',
//         display: 'flex',
//         alignItems: 'center',
//         transition: 'right 0.5s ease-in-out', // FIXED: animate right
//         zIndex: 1000,
//         background: 'transparent',

//         overflow: 'hidden',
//       }}
//     >
//       {/* Gear icon toggle */}
//       <div
//         onClick={() => setShowColors(!showColors)}
//         style={{
//           backgroundColor: '#4a6cf7',
//           color: '#fff',
//           padding: '12px',
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: '10px 0 0 10px',
//         }}
//       >
//         <FaCog />
//       </div>

//       {/* Color Options */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           gap: '10px',
//           padding: '12px',
//           borderRadius: '10px',
//           boxShadow: '0 0 20px rgba(0,0,0,0.1)',
//           backgroundColor:"#fff"
//         }}
//       >
//         {['#76ABA8', '#F875AA', '#FFC436', '#5FBDFF', '#00F5FF', '#4c9eafff'].map((color, i) => (
//           <button
//             key={i}
//             onClick={() => setColor(color)}
//             style={{
//               width: '35px',
//               height: '35px',
//               backgroundColor: color,
//               borderRadius: '6px',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SettingsMenu;



import React, { useContext, useState } from 'react';
import { ColorContext } from './ColorContext';
import { FaCog } from 'react-icons/fa';

const SettingsMenu = () => {
  const { color, setColor } = useContext(ColorContext); // <-- Get current color
  const [showColors, setShowColors] = useState(false);

  const colorOptions = ['#76ABA8', '#F875AA', '#FFC436', '#5FBDFF', '#00F5FF', '#4c9eafff'];

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: showColors ? '0px' : '-160px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        transition: 'right 0.5s ease-in-out',
        zIndex: 1000,
        background: 'transparent',
        overflow: 'hidden',
      }}
    >
      {/* Gear icon */}
      <div
        onClick={() => setShowColors(!showColors)}
        style={{
          backgroundColor: '#4a6cf7',
          color: '#fff',
          padding: '12px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px 0 0 10px',
        }}
      >
        <FaCog />
      </div>

      {/* Color options */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          padding: '12px',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          backgroundColor: '#fff',
        }}
      >
        {colorOptions.map((c, i) => (
          <button
            key={i}
            onClick={() => setColor(c)}
            style={{
              width: '35px',
              height: '35px',
              backgroundColor: c,
              borderRadius: '6px',
              border: color === c ? '3px solid #000' : '1px solid #ccc', // Highlight selected
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
