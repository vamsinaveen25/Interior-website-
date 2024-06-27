import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import "./Contact.css";

export default function Contact() {
  return (
    <div className='containerpara1'>
      <h1>CONNECT WITH US</h1>
      <p>Reach out on WhatsApp or give us a call for the best home design experience.</p>
      <div className='contactbutton'>
        <button className='naveen'>
          <i className="bi bi-telephone-fill"></i> Call Now
        </button>
        <button className='naveen1'>
          <i className="bi bi-whatsapp"></i> WhatsApp
        </button>
      </div>
    </div>
  );
}
