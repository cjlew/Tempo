import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';


export const receiveSongs= (songs) => ({
  type: RECEIVE_SONGS,
  songs
});



export const fetchSongs = () => (dispatch) => (
  APIUtil.fetchSongs()
    .then((songs) => (dispatch(receiveSongs(songs))))
);
