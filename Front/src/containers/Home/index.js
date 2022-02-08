import { connect } from 'react-redux';
import { fetchAll } from '../../actions/apiActions';
import Home from '../../Components/Home';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
