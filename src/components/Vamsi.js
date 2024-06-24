import React, { useState } from 'react';
import './Vamsi.css';

 function Form() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [updates, setUpdates] = useState(false);

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePreviousStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, like sending data to a server.
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Phone number:', phoneNumber);
    console.log('Email:', email);
    console.log('Property name:', propertyName);
    console.log('Send updates:', updates);
  };

  return (
    <div className="form-container">
      <h2>Designs for Every Budget</h2>
      <form className="form-grid" onSubmit={step === 2 ? handleSubmit : handleNextStep}>
        {step === 1 && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number:</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="updates"
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
              />
              <label htmlFor="updates">Send me updates on WhatsApp</label>
            </div>
            <div className="form-actions">
              <button type="submit">Get Free Quote</button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="propertyName">Property name:</label>
              <input
                type="text"
                id="propertyName"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
                required
              />
            </div>
            <div className="form-actions">
              <button type="button" onClick={handlePreviousStep}>Back</button>
              <button type="submit">Submit</button>
            </div>
          </>
        )}
      </form>
      <p className="terms">
        By submitting this form, you agree to the{' '}
        <a href="#">privacy policy</a> &{' '}
        <a href="#">terms and conditions</a>
      </p>
    </div>
  );
}

export default Form;
