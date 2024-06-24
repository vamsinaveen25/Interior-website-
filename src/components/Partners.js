import React from 'react';
import './Partner.css'; // Import CSS file for component-specific styles

export default function Partners() {
  return (
    <div className='partners-container'>
        <div className='name'>
        <h1>Our trusted partners</h1>
        <h2>Winning collaborations that produce winning designs.</h2>
      </div>
      <div className='marquee'>
        <marquee behavior="scroll" direction="left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQD2z-OpN2YE01OS-75v6Zya5bk4VwdPieA&s" alt="Partner Logo" />
        </marquee>
      </div>
      
    </div>
  );
}

