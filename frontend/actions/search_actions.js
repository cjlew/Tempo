import * as APIUtil from '../util/search_api_util';
import { receiveSongs } from './song_actions';


export const search = (query) => (dispatch) => (
  APIUtil.search(query)
    .then(results => dispatch(receiveSongs(results)) )
);
