import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Main);
