import {connect} from 'react-redux';
import { fetchSongs } from '../../../actions/song_actions';
import { fetchGenre } from '../../../actions/genre_actions';

import {
  fetchPlaylists,
  fetchPlaylist,
} from '../../../actions/playlist_actions';
import GenreShow from './genre_show';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  const genreId = parseInt(ownProps.match.params.genreId);
  let genre = state.entities.genres[genreId];
  let playlists = [];
  if (genre) {
    genre.playlist_ids.forEach(id => {
        const playlist = state.entities.playlists[id];
        if (playlist) {
          playlists.push(playlist);
        }
      });
  }
  return {
    currentUser: state.session.currentUser,
    playlists
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGenre: (id) => dispatch(fetchGenre(id)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreShow));
