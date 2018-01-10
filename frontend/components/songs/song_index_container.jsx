 import { connect } from 'react-redux';
import { fetchPlaylists, removeSong} from '../../actions/playlist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { queueSong, playSong, pausePlayer } from '../../actions/player_actions';

import SongIndex from './song_index';

const mapStateToProps = (state, ownProps) => {
  const songs = ownProps.songs;
  const playlist = ownProps.playlist ? ownProps.playlist : null;
  const album = ownProps.album ? ownProps.album : null;


return {
  songs,
  playlist,
  album,
  currentUser: state.session.currentUser
};
};

const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  pausePlayer: () => dispatch(pausePlayer()),
  playSong: (songId) => dispatch(playSong(songId)),
  queueSong: (songId) => dispatch(queueSong(songId)),
  removeSong: (playlistId, songId) => dispatch(removeSong(playlistId, songId)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
