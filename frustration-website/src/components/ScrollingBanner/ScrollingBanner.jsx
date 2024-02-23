import React from 'react';
import './ScrollingBanner.module.css'; // Import CSS file for styling

const ScrollingBanner = () => {
  return (
    <div className="scrolling-banner-container">
      <div className="scrolling-banner-text">
        <p>This is the scrolling text. It moves from right to left infinitely!</p>
      </div>
    </div>
  );
};

export default ScrollingBanner;