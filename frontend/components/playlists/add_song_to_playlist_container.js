import {connect} from 'react-redux';
import {
  createPlaylist,
  fetchPlaylists,
  fetchPlaylist,
  addSong,
} from '../../actions/playlist_actions';
import AddSongToPlaylist from './add_song_to_playlist';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUserPlaylistIds = state.session.currentUser.playlist;
  const currentUserPlaylists = [];


  currentUserPlaylistIds.forEach(playlistId =>

    currentUserPlaylists.push(state.entities.playlists[playlistId]));

  return {
    songId: ownProps.songId,
    currentUserPlaylists,
    currentUser: state.session.currentUser,
  };

};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  addSong: (playlistId, songId) => dispatch(addSong(playlistId, songId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongToPlaylist));
