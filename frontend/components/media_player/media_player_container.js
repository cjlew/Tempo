import { connect } from 'react-redux';
import MediaPlayer from './media_player';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const queue = [];
  const currentSong = state.entities.songs[state.player.currentSongId];
  state.player.queueSongIds.forEach((songId) => {
    queue.push(state.entities.songs[songId]);
  });

  return({
    queue,
    currentSong
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaPlayer));
