import {connect} from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { queueSong, playSong, pausePlayer } from '../../actions/player_actions';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {

  let artist = state.entities.artists[parseInt(ownProps.match.params.artistId)];
  let albums = [];
  let songs = [];
  
  if (state.entities.albums && artist && Object.keys(state.entities.songs).length > 0) {
  Object.keys(state.entities.albums).forEach((albumId) => {
    let album = state.entities.albums[albumId];
    if (album.artist_id === parseInt(ownProps.match.params.artistId)) {
      albums.push(album);
      album.song_ids.forEach((songId) => {
        songs.push(state.entities.songs[songId]);
      });
    }
  });
  }
return ({
  artist,
  albums,
  songs,
  currentUser: state.session.currentUser
});
};

const mapDispatchToProps = (dispatch) => ({
  pausePlayer: () => dispatch(pausePlayer()),
  playSong: (songId) => dispatch(playSong(songId)),
  queueSong: (songId) => dispatch(queueSong(songId)),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtist: (id) => dispatch(fetchArtist(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow));
