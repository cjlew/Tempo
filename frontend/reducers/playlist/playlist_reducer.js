import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../../actions/playlist_actions';
import merge from 'lodash/merge';

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, action.playlist);
    case RECEIVE_PLAYLISTS:
      return merge({}, state, action.playlists);
    case REMOVE_PLAYLIST:
      let newState = merge({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};

export default playlistReducer;
