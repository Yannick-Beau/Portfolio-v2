import { connect } from 'react-redux';

import { fetchAll } from '../../actions/apiActions';
import ProjectDetail from '../../Components/ProjectDetail';

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
