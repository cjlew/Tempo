import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_SONGS = 'RECEIVE_SEARCH_SONGS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';


export const clearSearchSongs = () => ({
  type: CLEAR_SEARCH,
});

export const receiveSearchSongs= (songs) => ({
  type: RECEIVE_SEARCH_SONGS,
  songs
});

export const clearSearch = () => (dispatch) => (
  dispatch(clearSearchSongs())
);

export const search = (query) => (dispatch) => (
  APIUtil.search(query)
    .then(results => dispatch(receiveSearchSongs(results)) )
);
