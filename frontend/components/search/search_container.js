import { connect } from 'react-redux';
import Search from './search';
import {withRouter} from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { search, clearSearch } from '../../actions/search_actions';
import { queueSong, playSong, pausePlayer } from '../../actions/player_actions';


const mapStateToProps = (state, ownProps) => {
  const songs=[];
  const artists=[];
  const albums=[];
  
  if (state.search.songs) {
    Object.values(state.search.songs).forEach(song =>
      songs.push(song));
    }
  if(state.search.artists) {
    Object.values(state.search.artists).forEach(artist =>
      artists.push(artist));
    }
  if(state.search.albums) {
    Object.values(state.search.albums).forEach(album =>
      albums.push(album));
  }
  return ({
    songs,
    artists,
    albums
  });

};

const mapDispatchToProps = (dispatch) => ({
  pausePlayer: () => dispatch(pausePlayer()),
  playSong: (songId) => dispatch(playSong(songId)),
  queueSong: (songId) => dispatch(queueSong(songId)),
  clearSearch: () => dispatch(clearSearch()),
  search: (query) => dispatch(search(query)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchSongs: () => dispatch(fetchSongs()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
