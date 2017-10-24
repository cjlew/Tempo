import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return (Object.assign({}, state, { currentUser }));
    default:
      return state;
  }
};

export default sessionReducer;
