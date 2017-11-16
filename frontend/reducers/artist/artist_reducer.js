import { RECEIVE_ARTIST, RECEIVE_ARTISTS, REMOVE_ARTIST } from '../../actions/artist_actions';
import merge from 'lodash/merge';

const artistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ARTIST:
      return Object.assign({}, state, action.artist);
    case RECEIVE_ARTISTS:
      return merge({}, state, action.artists);
    default:
      return state;
  }
};

export default artistReducer;
