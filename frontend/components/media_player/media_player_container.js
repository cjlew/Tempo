import { connect } from 'react-redux';
import MediaPlayer from './media_player';
import {withRouter} from 'react-router-dom';
import { nextSong, prevSong, playPlayer, pausePlayer, togglePlayer } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  const queue = [];
  const currentSong = state.entities.songs[state.player.currentSongId];
  state.player.queueSongIds.forEach((songId) => {
    queue.push(state.entities.songs[songId]);
  });


  return({
    playing: state.player.playing,
    queue,
    currentSong
  });
};

const mapDispatchToProps = (dispatch) => ({
  togglePlayer: () => dispatch(togglePlayer()),
  nextSong: () => dispatch(nextSong()),
  prevSong: () => dispatch(prevSong()),
  playPlayer: () => dispatch(playPlayer()),
  pausePlayer: () => dispatch(pausePlayer())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaPlayer));
