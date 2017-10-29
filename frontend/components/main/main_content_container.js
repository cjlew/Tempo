import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import MainContent from './main_content';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {
  fetchSongs: () => dispatch(fetchSongs()),
  fetchPlaylists: () => dispatch(fetchPlaylists())
};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (MainContent);
