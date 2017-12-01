import {connect} from 'react-redux';
import { createPlaylist } from '../../../actions/playlist_actions';
import Browse from './browse';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse));
