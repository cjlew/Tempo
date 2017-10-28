import { connect } from 'react-redux';
import Home from './home';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {
  fetchPlaylists: () => dispatch(fetchPlaylists()),
};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Home);
