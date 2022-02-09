import { connect } from 'react-redux';

import { fetchAll } from '../../actions/apiActions';
import Home from '../../Components/Home';

const mapStateToProps = state => ({
  firstname: state.firstname,
  lastname: state.lastname,
  description: state.description,
  linkGitHub: state.linkGitHub,
  linkLinkedin: state.linkLinkedin,
  subTitle: state.subTitle,
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
