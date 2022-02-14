import { ToastContainer } from 'react-toastify';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
      setShowFlash('');
    }
    if (showFlash === 'error') {
      flashError();
      setShowFlash('');
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
      <h1 className="section__title">Contact</h1>
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
};

Contact.propTypes = {
  showFlash: PropTypes.string.isRequired,
  setShowFlash: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  fetchAllAPi: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  emailField: PropTypes.string.isRequired,
  nameField: PropTypes.string.isRequired,
  messageField: PropTypes.string.isRequired,
  setFields: PropTypes.func.isRequired,
};

export default Contact;
