import { connect } from 'react-redux';

import Header from '../../../Components/Layout/Header';
import { setNavIsShowClassName } from '../../../actions/interfaceActions';

const mapStateToProps = state => ({
  navIsShowClassName: state.interface.navIsShowClassName,
});

const mapDispatchToProps = dispatch => ({
  setNavIsShowClassName: (newValue) => dispatch(setNavIsShowClassName(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
