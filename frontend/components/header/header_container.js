import { connect } from 'react-react';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Header);
