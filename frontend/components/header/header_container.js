import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {logout: () => dispatch(logout())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Header);
