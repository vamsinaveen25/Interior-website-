import React from 'react';
import './Homestyle.css';

const HomeStyles = () => {
  return (
    <div className="container2">
      <h1 className="title">Homes for every style</h1>
      <p className="description">
        Superior finishes, trendy designs and quality modules at affordable
        prices.
      </p>
      <div className="homes-grid">
        <div className="home-card">
          <img
            src="https://images.livspace-cdn.com/w:600/h:340/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/homes-for-every-budget-desktop-1657197190-XYuZj/2-bhk-1657197417-hijyj.jpg"
            alt="Monochromatic Grey 2 BHK"
            className="home-image"
          />
          <div className="home-info">
            <h2 className="home-title">Monochromatic Grey 2 BHK</h2>
            <p className="home-description">
              Add the cloudy hues to your space.
            </p>
            <button className="home-button">GET FREE QUOTE</button>
          </div>
        </div>
        <div className="home-card">
          <img
            src="https://images.livspace-cdn.com/w:600/h:340/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/homes-for-every-budget-desktop-1657197190-XYuZj/3-bhk-1657197415-Rlbqf.jpg"
            alt="Royal & Elegant 3 BHK"
            className="home-image"
          />
          <div className="home-info">
            <h2 className="home-title">Royal & Elegant 3 BHK</h2>
            <p className="home-description">
              Add textural and magnificent touch.
            </p>
            <button className="home-button">GET FREE QUOTE</button>
          </div>
        </div>
        <div className="home-card">
          <img
            src="https://images.livspace-cdn.com/w:600/h:340/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/homes-for-every-budget-desktop-1657197190-XYuZj/4-4-bhk-1657197414-n5HKc.jpg"
            alt="Contemporary & Classy 4 BHK"
            className="home-image"
          />
          <div className="home-info">
            <h2 className="home-title">Contemporary & Classy 4 BHK</h2>
            <p className="home-description">
              Classic and crisp geometric designs.
            </p>
            <button className="home-button">GET FREE QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStyles;
