import {connect} from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { queueSong, playSong, pausePlayer } from '../../actions/player_actions';
import {
  fetchPlaylists,
  fetchPlaylist,
  editPlaylist,
  deletePlaylist,
  removeSong
} from '../../actions/playlist_actions';
import PlaylistShow from './playlist_show';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.match.params.playlistId);
  let playlist = state.entities.playlists[playlistId];
  let songs = [];
  if (playlist) {
    playlist.song_ids.forEach(id => {
        const song = state.entities.songs[id];
        if (song) {
          songs.push(song);
        }
      });
  }
  return {
    playlist,
    songs,
  };

};

const mapDispatchToProps = (dispatch) => ({
  pausePlayer: () => dispatch(pausePlayer),
  playSong: (songId) => dispatch(playSong(songId)),
  queueSong: (songId) => dispatch(queueSong(songId)),
  removeSong: (playlistId, songId) => dispatch(removeSong(playlistId, songId)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  editPlaylist: (playlist) => dispatch(editPlaylist(playlist)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id)),
  fetchSongs: () => dispatch(fetchSongs()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow));
