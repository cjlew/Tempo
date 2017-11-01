import { combineReducers } from 'redux';
import songReducer from './song/song_reducer';
import playlistReducer from './playlist/playlist_reducer';
import userReducer from './user/user_reducer';

const entitiesReducer = combineReducers({
  playlists: playlistReducer,
  users: userReducer,
  songs: songReducer
});

export default entitiesReducer;
