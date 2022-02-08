import { connect } from 'react-redux';
import { fetchAll } from '../../actions/apiActions';
import Home from '../../Components/Home';

const mapStateToProps = state => ({
  firstname: state.firstname,
  lastname: state.lastname,
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
