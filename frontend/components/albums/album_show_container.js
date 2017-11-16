import {connect} from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { queueSong, playSong, pausePlayer } from '../../actions/player_actions';
import {
  fetchAlbum,
  fetchAlbums
} from '../../actions/playlist_actions';
import AlbumShow from './album_show';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch) => ({
  pausePlayer: () => dispatch(pausePlayer()),
  playSong: (songId) => dispatch(playSong(songId)),
  queueSong: (songId) => dispatch(queueSong(songId)),
  fetchSongs: () => dispatch(fetchSongs()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow));
