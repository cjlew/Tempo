import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
