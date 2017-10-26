import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, RECEIVE_ERRORS } from '../../actions/playlist_actions.js';

const playlistErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors ? action.errors : [];
    case RECEIVE_PLAYLIST:
      return [];
    case RECEIVE_PLAYLISTS:
      return [];
    default:
      return state;
  }
};

export default playlistErrorsReducer;
