import { combineReducers } from 'redux';
import songReducer from './song/song_reducer';
import playlistReducer from './playlist/playlist_reducer';

const entitiesReducer = combineReducers({
  playlists: playlistReducer,
  songs: songReducer
});

export default entitiesReducer;
