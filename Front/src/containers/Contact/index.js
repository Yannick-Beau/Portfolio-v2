import { connect } from 'react-redux';

import Contact from '../../Components/Contact';
import { setShowFlash } from '../../actions/interfaceActions';
import { fetchAll } from '../../actions/apiActions';
import { sendEmail } from '../../actions/contactActions';

const mapStateToProps = state => ({
  showFlash: state.interface.showFlash,
  email: state.api.email,
});

const mapDispatchToProps = dispatch => ({
  setShowFlash: (newValue) => dispatch(setShowFlash(newValue)),
  fetchAllAPi: () => dispatch(fetchAll()),
  sendEmail: (newValue) => dispatch(sendEmail(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
