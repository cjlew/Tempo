import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import MainContent from './main_content';
import { withRouter } from 'react-router-dom';


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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
) (MainContent));
