import { combineReducers } from 'redux';
import playlistReducer from './playlist/playlist_reducer';

const entitiesReducer = combineReducers({
  playlists: playlistReducer
});

export default entitiesReducer;
