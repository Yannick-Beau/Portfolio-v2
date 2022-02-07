import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import Form from './Form';

import './Contact.scss';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [showFlash, setShowFlash] = useState(null);
  function flashError() {
    toast.error('Une erreur est survenue. Avez-vous rempli l\'ensemble des champs obligatoires', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function flashSuccess() {
    toast.success('Votre message a été envoyé avec succès', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
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
                  <span className="contact__subtitle">beauyannick@gmail.com</span>
                </div>
            </div>
          </div>

         <Form showFlash={showFlash} setShowFlash={setShowFlash} />
      </div>
    </section>
  );
}

export default Contact;
