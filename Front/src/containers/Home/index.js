import { connect } from 'react-redux';

import { fetchAll } from '../../actions/apiActions';
import { setIsLoading } from '../../actions/interfaceActions';
import Home from '../../Components/Home';

const mapStateToProps = state => ({
  firstname: state.api.firstname,
  lastname: state.api.lastname,
  description: state.api.description,
  linkGitHub: state.api.linkGitHub,
  linkLinkedin: state.api.linkLinkedin,
  subTitle: state.api.subTitle,
  isLoading: state.interface.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
  setIsLoading: (newValue) => dispatch(setIsLoading(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
