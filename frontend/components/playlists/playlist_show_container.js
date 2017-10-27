import {connect} from 'react-redux';
import {
  fetchPlaylists,
  fetchPlaylist,
  updatePlaylist,
  deletePlaylist,
} from '../../actions/playlist_actions.js';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.match.params.playlistId);
  debugger
  let playlist = state.entities.playlists[playlistId];

  let songs = [];
  playlist.song_ids.forEach(id => {
        songs.push(state.entities.songs[id]);
    });

  return {
    playlist,
    songs,
    state
  };

};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
