// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/Form';
import './App.css';


import Warrenty from './components/Warrenty';
import HomeStyles from './components/Homestyle';

import Para from './components/Para';
import HomeInteriorGuide from './components/Download';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Vamsi from './components/Vamsi';

function App() {
  return (
    <>
    
    <div className="app-container">
      <Navbar />
      
      <div className="content">
        <div className="main-sections">
          <div id="home" className="section">
             <ContactForm/>
          </div>
          <div id="about">
            <Warrenty/>
            </div>

          <div>
          <Para/>
          </div>
          
          
          <div id="services">
              <HomeStyles/>
          </div>
          <div id="contact">
          <HomeInteriorGuide/>
          </div>
        </div >
        <div id='partner'>
        <Partners/>
        </div>
        <div>
          <Contact/>
        </div>
        
      
      
      </div>
      </div>
      </>
   
  );
}

export default App;
