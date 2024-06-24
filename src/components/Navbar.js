import React from 'react';
import './Navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
      <ul>
      <button className="free" type="submit">Get Free Quote</button>
      </ul>
      
    </nav>
  );
}
