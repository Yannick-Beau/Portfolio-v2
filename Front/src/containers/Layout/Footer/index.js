import { connect } from 'react-redux';

import Footer from '../../../Components/Layout/Footer';

const mapStateToProps = state => ({
  linkGitHub: state.linkGitHub,
  linkLinkedin: state.linkLinkedin,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
