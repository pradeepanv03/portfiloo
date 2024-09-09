import React from 'react'
import { FaAngleUp } from 'react-icons/fa';
import './ScrollToTop.css';
export default function ScrollToTop() {
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
    <FaAngleUp />
  </div>  )
}
