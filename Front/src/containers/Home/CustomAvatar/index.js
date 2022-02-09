import { connect } from 'react-redux';

import CustomAvatar from '../../../Components/Home/CustomAvatar';

const mapStateToProps = state => ({
  picture: state.picture,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomAvatar);
