import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchPlaylists } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {fetchPlaylists: (playlists) => dispatch(fetchPlaylists(playlists))};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Sidebar);
