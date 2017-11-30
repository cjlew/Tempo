import {connect} from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import {
  createPlaylist,
  fetchPlaylists,
  fetchPlaylist,
} from '../../actions/playlist_actions';
import PlaylistIndex from './playlists_index';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  let playlists = [];
  Object.keys(state.entities.playlists).forEach(id => {
    if (state.entities.playlists[id].creator_id === state.session.currentUser.id || (
        state.session.currentUser.followed_playlists &&
        state.session.currentUser.followed_playlists[id] !== undefined)) {
      playlists.push(state.entities.playlists[id]);
    }
  });



  return {
    currentUser: state.session.currentUser,
    playlists
  };
};

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex));
