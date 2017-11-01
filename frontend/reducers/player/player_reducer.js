import { RECEIVE_QUEUE, PLAY_SONG_NOW } from '../../actions/player_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentSongId : null,
  queueSongIds: [],
  paused: false,
  ord: -1
};

const playerReducer = (state = defaultState, action) => {
  let newQueue;
  let newOrd;
  let currentSongId;
  Object.freeze(state);
  switch(action.type){
    case PLAY_SONG_NOW:

      newQueue=state.queueSongIds;
      newOrd = state.ord+1;
      newQueue.splice(newOrd, 0, action.songId);
      currentSongId = action.songId;
      return Object.assign({}, state, { ord:newOrd, currentSongId, queueSongIds: newQueue});

    case RECEIVE_QUEUE:

      newQueue = state.queueSongIds.concat(action.songIds);
      if (state.currentSongId === null) {
        currentSongId = newQueue[0];
        return Object.assign({}, state, { currentSongId, queueSongIds: newQueue});
      } else {
        return Object.assign({}, state, { queueSongIds: newQueue});
      }

    default:
      return state;
  }
};

export default playerReducer;
