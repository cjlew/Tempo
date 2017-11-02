import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchPlaylists } from '../../actions/session_actions';
import { clearSearch } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {
  clearSearch: () => dispatch(clearSearch()),
  fetchPlaylists: (playlists) => dispatch(fetchPlaylists(playlists))
};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Sidebar);
