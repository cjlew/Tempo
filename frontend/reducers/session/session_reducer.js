import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let currentUser = action.user;
      return (Object.assign({}, state, { [currentUser.id]: currentUser }));
    default:
      return state;
  }
};

export default sessionReducer;
