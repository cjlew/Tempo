import {connect} from 'react-redux';
import {
  fetchPlaylists,
  fetchPlaylist,
  updatePlaylist,
} from '../../actions/playlist_actions';
import AddSongToPlaylist from './add_song_to_playlist';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const currentUserPlaylistIds = state.session.currentUser.playlist;
  const currentUserPlaylists = [];


  currentUserPlaylistIds.forEach(playlistId =>

    currentUserPlaylists.push(state.entities.playlists[playlistId]));

  return {
    song_id: ownProps.song_id,
    currentUserPlaylists
  };

};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongToPlaylist));
