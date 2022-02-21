import { connect } from 'react-redux';

import { fetchAll } from '../../actions/apiActions';
import { setShowLinkWebSite, setIsLoading } from '../../actions/interfaceActions';
import ProjectDetail from '../../Components/ProjectDetail';
import { saveSortedSkills } from '../../actions/projectDetailAction';

const mapStateToProps = state => ({
  projects: state.api.projects,
  showLinkWebSite: state.interface.showLinkWebSite,
  isLoading: state.interface.isLoading,
  projectSkillsBackend: state.projectDetail.projectSkillsBackend,
  projectSkillsFrontend: state.projectDetail.projectSkillsFrontend,
  projectSkillsDivers: state.projectDetail.projectSkillsDivers,
});

const mapDispatchToProps = dispatch => ({
  fetchAllAPi: () => dispatch(fetchAll()),
  setShowLinkWebSite: (newValue) => dispatch(setShowLinkWebSite(newValue)),
  setIsLoading: (newValue) => dispatch(setIsLoading(newValue)),
  saveSortedSkills: (newValue, identifier) => dispatch(saveSortedSkills(newValue, identifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
