import { RECEIVE_GENRE, RECEIVE_GENRES, REMOVE_GENRE } from '../../actions/genre_actions';
import merge from 'lodash/merge';

const genreReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GENRE:
      return merge({}, state, action.genre);
    case RECEIVE_GENRES:
      return merge({}, state, action.genres);
    default:
      return state;
  }
};

export default genreReducer;
