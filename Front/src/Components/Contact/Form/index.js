import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.scss';

function Form({ showFlash, setShowFlash}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm('MyPortfolio', 'template_58ghjsn', event.target, 'user_b1iKQhv18vT3UElQ5WnW6')
      .then((response) => {
        setShowFlash('success');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        setShowFlash('error');
      });
    event.target.reset();
  }
  return (
    <form 
      className="contact__form grid"
      onSubmit={(event) => {
        event.preventDefault();
        sendEmail(event);
      }}
    >
      <div className="contact__inputs grid">
        <div className="contact__content">
          <label for="name" className="contact__label">Nom</label>
          <input 
            className="contact__input"
            type="text" 
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </div>
        <div className="contact__content">
          <label for="email" className="contact__label">Email</label>
          <input 
            className="contact__input" 
            type="email" 
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
        </div>
        <div className="contact__content">
          <label for="message" className="contact__label">Message</label>
          <textarea 
            className="contact__input" 
            name="message"
            cols="0" 
            rows="7"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            required
          />
        </div>
        <div>
          <button type="submit" className="button button--flex">
            Envoyer le message
            <i className="uil uil-message button__icon"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
