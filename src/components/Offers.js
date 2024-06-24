import React from 'react';
import './Offers.css';

function WhatWeOffer() {
  return (
    <div className="container">
      <h1>What we offer</h1>
      <div className="cards">
        <div className="card">
          <div className="card-header">
            <img src="https://cdn-icons-png.flaticon.com/512/2965/2965546.png" alt="wrench icon" />
            <h2>Our services</h2>
            </div>
            <ul className="card-body">
            <li>Modular kitchens</li>
            <li>Modular wardrobes</li>
            <li>Lighting</li>
            <li>Flooring</li>
            <li>Electrical work</li>
            <li>Civil work</li>
            <li>False ceiling</li>
            <li>Wall design & painting</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">
            <img src="https://cdn-icons-png.flaticon.com/512/854/854048.png" alt="shield icon" />
            <h2>Warranty</h2>
          </div>
          <ul className="card-body">
            <li>FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.</li>
            <li>Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">
            <img src="https://cdn-icons-png.flaticon.com/512/129/129217.png" alt="lightbulb icon" />
            <h2>Technology & science</h2>
          </div>
          <ul className="card-body">
            <li>AquaBloc® Technology - Hermetically sealed edges that ensure no moisture enters the panels of your modular cabinets.</li>
            <li>AntiBubble® Technology - Super seamless panels without air bubbles for your modular cabinets.</li>
            <li>DuraBuild™ Technology - Robust structure for modular cabinets, making them strong and long-lasting.</li>
            <li>Design Science - Modular kitchens with improved accessibility that makes daily tasks more efficient and reduces stress on the body.</li>
          </ul>
          <div className="card-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>
      <button className="button">GET FREE QUOTE</button>
    </div>
  );
}

export default WhatWeOffer;
