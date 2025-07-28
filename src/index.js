import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Carousels from './Carousels';
import Style from './Style';
import Style1 from './Style1';
// import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider from './Slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Style/> */}
    {/* <Style1/> */}
    {/* <Carousels/> */}
    <App />
    {/* <Slider/>  */}
    {/* <Slider1 /> */}
    {/* <Slider2 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
