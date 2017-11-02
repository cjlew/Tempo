import { RECEIVE_SEARCH_SONGS, CLEAR_SEARCH } from '../../actions/search_actions';
import merge from 'lodash/merge';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SEARCH_SONGS:
      return Object.assign({}, action.songs);
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
