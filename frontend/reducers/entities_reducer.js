import { combineReducers } from 'redux';
import songReducer from './song/song_reducer';
import playlistReducer from './playlist/playlist_reducer';
import userReducer from './user/user_reducer';
import albumReducer from './album/album_reducer';
import artistReducer from './artist/artist_reducer';


const entitiesReducer = combineReducers({
  playlists: playlistReducer,
  users: userReducer,
  songs: songReducer,
  artists: artistReducer,
  albums: albumReducer 
});

export default entitiesReducer;
