import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {
  fetchSongs: () => dispatch(fetchSongs()),
  fetchPlaylists: () => dispatch(fetchPlaylists())
};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Main);
