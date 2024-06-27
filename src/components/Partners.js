import React from 'react';
import './Partner.css'; // Import CSS file for component-specific styles
import Homepagecard from './Homepagecard';

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
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/9/340640632/ZN/AQ/GZ/146443260/centuryply-club-prime-premium-waterproof-ply-9-mm-500x500.jpg "alt="Partner Logo" />
          <img src="https://play-lh.googleusercontent.com/toGn5dLJ9PgqJLdq8-BZrIivTdG_HJmpHKhD7YRxhCUY1vVEZh620KCt8LbFIcM7QFwH" alt="Partner Logo" />
          <img src="https://play-lh.googleusercontent.com/nB6hFJ5uduR1ZCI-s0VPOdyGbqDt5uVz2RtlpImltaW8PdbJ6z-pR3u-BTE1fTyCIQ" alt="partner logo" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJONtOn28ythjTMSYpYDFUSeZFDMndtfVI0g&s" alt="partner logo" />
          <img src="https://www.t-systems.com/resource/image/244006/ratio3x2/1440/960/caa9721bf200e4c332b7f11d142f2fa2/F0ACF5528998210F857181D710194CE5/im-ref-siemens.png" alt="partner logo" />
        </marquee>
      </div>
      <Homepagecard/>
    </div>
    
  );
}

