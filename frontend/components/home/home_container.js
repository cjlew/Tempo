import { connect } from 'react-redux';
import Home from './home';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    state
  };
};

const mapDispatchToProps = (dispatch) => {
return {
  fetchPlaylists: () => dispatch(fetchPlaylists()),
};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Home);
