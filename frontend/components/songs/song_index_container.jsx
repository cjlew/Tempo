import { connect } from 'react-redux';
import { fetchPlaylists, removeSong} from '../../actions/playlist_actions';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';
import { queueSong, playSong, pausePlayer } from '../../actions/player_actions';
import { fetchUser } from '../../actions/user_actions';

import SongIndex from './song_index';

const mapStateToProps = (state, ownProps) => {
  const songs = ownProps.songs;
  const playlist = ownProps.playlist ? ownProps.playlist : null;
  const album = ownProps.album ? ownProps.album : null;


return {
  songs,
  playlist,
  album
};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  pausePlayer: () => dispatch(pausePlayer()),
  playSong: (songId) => dispatch(playSong(songId)),
  queueSong: (songId) => dispatch(queueSong(songId)),
  removeSong: (playlistId, songId) => dispatch(removeSong(playlistId, songId)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
