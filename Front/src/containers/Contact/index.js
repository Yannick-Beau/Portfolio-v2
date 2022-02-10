import { connect } from 'react-redux';

import Contact from '../../Components/Contact';
import { setShowFlash } from '../../actions/interfaceActions';

const mapStateToProps = state => ({
  showFlash: state.interface.showFlash,
});

const mapDispatchToProps = dispatch => ({
  setShowFlash: (newValue) => dispatch(setShowFlash(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
