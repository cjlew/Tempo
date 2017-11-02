import { RECEIVE_SONGS } from '../../actions/song_actions';
import { RECEIVE_SEARCH_SONGS, CLEAR_SONGS } from '../../actions/search_actions';
import merge from 'lodash/merge';

const songReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONGS:
      return Object.assign({}, state, action.songs);
    case CLEAR_SONGS:
      return {};
    default:
      return state;
  }
};

export default songReducer;
