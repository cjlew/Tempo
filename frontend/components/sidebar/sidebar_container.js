import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchPlaylists } from '../../actions/session_actions';
import { clearSongState } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {
  clearSongState: () => dispatch(clearSongState()),
  fetchPlaylists: (playlists) => dispatch(fetchPlaylists(playlists))
};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Sidebar);
