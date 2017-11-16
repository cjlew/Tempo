import { RECEIVE_ALBUM, RECEIVE_ALBUMS, REMOVE_ALBUM } from '../../actions/album_actions';
import merge from 'lodash/merge';

const albumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.album);
    case RECEIVE_ALBUMS:
      return merge({}, state, action.albums);
    default:
      return state;
  }
};

export default albumReducer;
