import emailjs from '@emailjs/browser';
import { SEND_EMAIL, setFields } from '../actions/contactActions';
import { setShowFlash } from '../actions/interfaceActions';

const contactMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EMAIL:
      emailjs.sendForm('MyPortfolio', 'template_58ghjsn', action.event.target, 'user_b1iKQhv18vT3UElQ5WnW6')
        .then((response) => {
          store.dispatch(setShowFlash('success'));
          store.dispatch(setFields('', 'name'));
          store.dispatch(setFields('', 'email'));
          store.dispatch(setFields('', 'message'));
        }, (error) => {
          store.dispatch(setShowFlash('error'));
        });
      break;
    default:
      break;
  }
  return next(action);
}

export default contactMiddlewares;
