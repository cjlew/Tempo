import { RECEIVE_QUEUE, PLAY_SONG_NOW, PLAY, PAUSE,
         TOGGLE_PLAY, PLAY_NEXT_SONG, PLAY_PREVIOUS_SONG } from '../../actions/player_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentSongId : null,
  queueSongIds: [],
  playing: false,
  ord: -1
};


const playerReducer = (state = defaultState, action) => {

  let newQueue;
  let newOrd;
  let currentSongId;
  Object.freeze(state);
  switch(action.type){
    case PLAY_NEXT_SONG:
      newOrd = state.ord + 1;
      currentSongId = state.queueSongIds[newOrd];
      if (currentSongId) {
        return Object.assign({}, state, { ord:newOrd, currentSongId});
      } else {
        newOrd = 0;
        currentSongId = state.queueSongIds[newOrd];
        return Object.assign({}, state, { ord:newOrd, currentSongId});
      }

    case PLAY_PREVIOUS_SONG:
      newOrd = state.ord - 1;
      currentSongId = state.queueSongIds[newOrd];
      if (currentSongId) {
        return Object.assign({}, state, { ord:newOrd, currentSongId});
      } else {
        newOrd = 0;
        currentSongId = state.queueSongIds[newOrd];
        return Object.assign({}, state, { ord:newOrd, currentSongId});
      }

    case TOGGLE_PLAY:
      return Object.assign({}, state, { playing: !state.playing });

    case PLAY:
      return Object.assign({}, state, { playing: true });

    case PAUSE:
      return Object.assign({}, state, { playing: false });

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
