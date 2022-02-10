import './Form.scss';

function Form({ 
  sendEmail,
  emailField,
  nameField,
  messageField,
  setFields,
}) {
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
          <label htmlFor="name" className="contact__label">Nom</label>
          <input 
            className="contact__input"
            type="text" 
            name="name"
            value={nameField}
            onChange={(event) => {
              setFields(event.target.value, 'name');
            }}
            required
          />
        </div>
        <div className="contact__content">
          <label htmlFor="email" className="contact__label">Email</label>
          <input 
            className="contact__input" 
            type="email" 
            name="email"
            value={emailField}
            onChange={(event) => {
              setFields(event.target.value, 'email');
            }}
            required
          />
        </div>
        <div className="contact__content">
          <label htmlFor="message" className="contact__label">Message</label>
          <textarea 
            className="contact__input" 
            name="message"
            cols="0" 
            rows="7"
            value={messageField}
            onChange={(event) => {
              setFields(event.target.value, 'message');
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
