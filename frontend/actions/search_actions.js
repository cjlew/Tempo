import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';


export const clearSearchResults = () => ({
  type: CLEAR_SEARCH,
});

export const receiveSearchSongs= (results) => ({
  type: RECEIVE_SEARCH,
  results
});

export const clearSearch = () => (dispatch) => (
  dispatch(clearSearchResults())
);

export const search = (query) => (dispatch) => (
  APIUtil.search(query)
    .then(results => dispatch(receiveSearchSongs(results)) )
);
