import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import "../Scrolltop/scrolltop.css";

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
