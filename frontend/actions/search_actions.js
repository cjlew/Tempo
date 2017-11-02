import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_SONGS = 'RECEIVE_SEARCH_SONGS';
export const CLEAR_SONGS = 'CLEAR_SONGS';


export const clearSongs = () => ({
  type: CLEAR_SONGS,
});

export const receiveSearchSongs= (songs) => ({
  type: RECEIVE_SEARCH_SONGS,
  songs
});

export const clearSongState = () => (dispatch) => (
  dispatch(clearSongs())
);

export const search = (query) => (dispatch) => (
  APIUtil.search(query)
    .then(results => dispatch(receiveSearchSongs(results)) )
);
