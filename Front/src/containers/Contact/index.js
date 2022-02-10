import { connect } from 'react-redux';

import Contact from '../../Components/Contact';
import { setShowFlash } from '../../actions/interfaceActions';
import { fetchAll } from '../../actions/apiActions';
import { sendEmail, setFields } from '../../actions/contactActions';

const mapStateToProps = state => ({
  showFlash: state.interface.showFlash,
  email: state.api.email,
  emailField: state.contact.emailField,
  nameField: state.contact.nameField,
  messageField: state.contact.messageField,
});

const mapDispatchToProps = dispatch => ({
  setShowFlash: (newValue) => dispatch(setShowFlash(newValue)),
  fetchAllAPi: () => dispatch(fetchAll()),
  sendEmail: (newValue) => dispatch(sendEmail(newValue)),
  setFields: (newValue, identifier) => dispatch(setFields(newValue, identifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
