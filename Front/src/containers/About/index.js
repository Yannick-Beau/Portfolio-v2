import { connect } from 'react-redux';

import { fetchAll } from '../../actions/apiActions';
import About from '../../Components/About';

const mapStateToProps = state => ({
  about: state.api.about,
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
