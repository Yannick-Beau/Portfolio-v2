import './Contact.scss';
import Form from './Form';

function Contact() {
  return (
    <section className="contact section" id="contact">
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

         <Form />
      </div>
    </section>
  );
}

export default Contact;
