import {connect} from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { queueSong, playSong, pausePlayer } from '../../actions/player_actions';
import {
  fetchAlbum,
  fetchAlbums
} from '../../actions/album_actions';
import AlbumShow from './album_show';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const albumId = parseInt(ownProps.match.params.albumId);
  let album = state.entities.albums[albumId];
  let songs = [];
  if (album) {
    album.song_ids.forEach(id => {
        const song = state.entities.songs[id];
        if (song) {
          songs.push(song);
        }
      });
  }
return ({
  album,
  songs,
  currentUser: state.session.currentUser
});
};

const mapDispatchToProps = (dispatch) => ({
  pausePlayer: () => dispatch(pausePlayer()),
  playSong: (songId) => dispatch(playSong(songId)),
  queueSong: (songId) => dispatch(queueSong(songId)),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchAlbum: (id) => dispatch(fetchAlbum(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow));
