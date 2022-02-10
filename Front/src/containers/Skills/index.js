import { connect } from 'react-redux';

import { fetchAll } from '../../actions/apiActions';
import Skills from '../../Components/Skills';

const mapStateToProps = state => ({
  skills: state.api.skills,
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
