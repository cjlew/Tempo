import { connect } from 'react-redux';
import { updatePlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import SongIndex from './song_index';

const mapStateToProps = (state, ownProps) => {
return {};
};

const mapDispatchToProps = (dispatch) => ({
  updatePlaylist: (id) => dispatch(updatePlaylist(id)),
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
