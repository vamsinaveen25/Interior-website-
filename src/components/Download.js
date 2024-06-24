import React from 'react';
import './Download.css'

const HomeInteriorGuide = () => {
  return (
    <div className="container3">
      <div className="image-container">
        <img src="https://images.livspace-cdn.com/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/offerings-1615197161-iCUAJ/exp-mod-kitchen-1621414237-yU8i3/brochure-exp-1638167804-NuSA2/web-1638167823-6amoZ.jpg" alt="Kitchen Interior" />
      </div>
      <div className="text-container">
        <h2>Download home interior guide</h2>
        <p>Don't forget to consider these fundamental design guidelines to know before you start interior designing!</p>
        <button className="download-button">DOWNLOAD NOW</button>
      </div>
    </div>
  );
};

export default HomeInteriorGuide;