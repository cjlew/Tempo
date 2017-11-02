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

  Object.values(state.search).forEach(song =>
    songs.push(song));
  return ({
    songs
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
