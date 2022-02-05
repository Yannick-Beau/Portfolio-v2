import './Form.scss';

function Form() {
  return (
    <form action="" className="contact__form grid">
      <div className="contact__inputs grid">
        <div className="contact__content">
          <label for="" className="contact__label">Nom</label>
          <input type="text" className="contact__input" />
        </div>
        <div className="contact__content">
          <label for="" className="contact__label">Email</label>
          <input type="email" className="contact__input" />
        </div>
        <div className="contact__content">
          <label for="" className="contact__label">Message</label>
          <textarea name="" id="" cols="0" rows="7" className="contact__input" />
        </div>
        <div>
          <a href="#" className="button button--flex">
            Envoyer le message
            <i className="uil uil-message button__icon"></i>
          </a>
        </div>
      </div>
    </form>
  );
}

export default Form;
