import {connect} from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import {
  fetchPlaylists,
  fetchPlaylist,
} from '../../actions/playlist_actions';
import PlaylistIndex from './playlists_index';

const mapStateToProps = (state, ownProps) => {
  
  return {
    playlists: Object.keys(state.entities.playlists)
                     .map(key => state.entities.playlists[key])
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
