import { combineReducers } from 'redux';
import sessionErrorsReducer from './session/session_errors_reducer';
import playlistErrorsReducer from './playlist/playlist_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  playlists: playlistErrorsReducer
});

export default errorsReducer;
