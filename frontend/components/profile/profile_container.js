import { connect } from 'react-redux';
import Profile from './profile';
import {withRouter} from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const user = state.entities.users[userId];
  const userPlaylists = [];
  let playlist;

  if (user) {
    user.playlist.forEach(playlistId => {
      playlist = state.entities.playlists[playlistId];
      if (playlist){
        userPlaylists.push(state.entities.playlists[playlistId]);
      }
    });
  }



  return({
    currentUser: state.session.currentUser,
    user,
    userPlaylists,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
