import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER } from '../../actions/user_actions';


const defaultState = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let currentUser;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      currentUser = action.user;
      return (Object.assign({}, state, { currentUser }));
    case RECEIVE_USER:
     if (state.currentUser.id === action.user.id) {
       currentUser = action.user;
       return(Object.assign({}, state, { currentUser }));
     } else {return state; }
    default:
      return state;
  }
};

export default sessionReducer;
