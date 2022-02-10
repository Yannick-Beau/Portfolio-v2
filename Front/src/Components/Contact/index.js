import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { flashError, flashSuccess } from '../../functions/flash';
import Form from './Form';

import './Contact.scss';
import 'react-toastify/dist/ReactToastify.css';

function Contact({ 
  showFlash, 
  setShowFlash, 
  email, 
  fetchAllAPi, 
  sendEmail,
  emailField,
  nameField,
  messageField,
  setFields,
}) {
  useEffect(() => {
    if (email === '') {
      fetchAllAPi();
    }
  }, []);
  useEffect(() => {
    if (showFlash === 'success') {
      flashSuccess();
      setShowFlash(null);
    }
    if (showFlash === 'error') {
      flashError();
      setShowFlash(null);
    }
  }, [showFlash]);
  return (
    <section className="contact section" id="contact">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Contacter moi</span>
      <div className="contact__container container grid">
          <div>
            <div className="contact__information">
                <i className="uil uil-envelope contact__icon"></i>
                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">{email}</span>
                </div>
            </div>
          </div>

         <Form 
          sendEmail={sendEmail}
          emailField={emailField}
          nameField={nameField}
          messageField={messageField}
          setFields={setFields} 
        />
      </div>
    </section>
  );
}

export default Contact;
