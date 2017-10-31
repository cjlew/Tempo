import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import SongIndex from './song_index';

const mapStateToProps = (state, ownProps) => {
return {};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
