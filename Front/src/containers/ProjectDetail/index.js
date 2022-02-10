import { connect } from 'react-redux';

import { fetchAll } from '../../actions/apiActions';
import { setShowLinkWebSite, setIsLoading } from '../../actions/interfaceActions'
import ProjectDetail from '../../Components/ProjectDetail';

const mapStateToProps = state => ({
  projects: state.api.projects,
  showLinkWebSite: state.interface.showLinkWebSite,
  isLoading: state.interface.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
  setShowLinkWebSite: (newValue) => dispatch(setShowLinkWebSite(newValue)),
  setIsLoading: (newValue) => dispatch(setIsLoading(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
