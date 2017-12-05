import {connect} from 'react-redux';
import { fetchPlaylists, fetchPlaylist } from '../../../actions/playlist_actions';
import { fetchGenres, fetchGenre } from '../../../actions/genre_actions';
import Genres from './genres';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  let genres=[];
  if (state.entities.genres) {
    Object.keys(state.entities.genres).forEach((id) => {
      let genre = state.entities.genres[id];
      if (genre.playlist_ids.length > 0) {
        genres.push(genre);
      }
    });
  }
  return {
    currentUser: state.session.currentUser,
    genres
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchGenre: (id) => dispatch(fetchGenre(id)),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres));
