import {connect} from 'react-redux';
import { fetchPlaylists, fetchPlaylist } from '../../../actions/playlist_actions';
import Genres from './genres';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    playlists: Object.keys(state.entities.playlists)
                     .map(key => state.entities.playlists[key])
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres));
