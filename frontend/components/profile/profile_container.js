import { connect } from 'react-redux';
import Profile from './profile';
import {withRouter} from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  return({
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
