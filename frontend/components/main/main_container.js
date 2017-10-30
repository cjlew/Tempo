import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { withRouter } from 'react-router-dom';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
