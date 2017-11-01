import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let currentUser;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      if (action.user){
      currentUser = Object.values(action.user)[0];
      debugger
    } else{
      currentUser = null;
    }
      return (Object.assign({}, state,  { currentUser }  ));
    default:
      return state;
  }
};

export default sessionReducer;
