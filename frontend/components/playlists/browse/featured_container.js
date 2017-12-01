import {connect} from 'react-redux';
import {  fetchPlaylist, fetchFeaturedPlaylists } from '../../../actions/playlist_actions';
import Featured from './featured';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    playlists: Object.keys(state.entities.playlists)
                     .map(key => state.entities.playlists[key])
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFeaturedPlaylists: () => dispatch(fetchFeaturedPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured));
