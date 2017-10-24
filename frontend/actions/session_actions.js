import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveCurrentUser = (user) => {
  return {
  type: RECEIVE_CURRENT_USER,
  user,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const login = (currentUser) => (dispatch) => {
    return APIUtil.login(currentUser)
      .then((currentUser) => {
        return dispatch(receiveCurrentUser(currentUser));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
};

export const logout = () => (dispatch) => {
    return APIUtil.logout()
      .then(() => {
        return dispatch(receiveCurrentUser(null));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
};

export const signup = (currentUser) => (dispatch) => {
    return APIUtil.signup(currentUser)
      .then((currentUser) => {
        return dispatch(receiveCurrentUser(currentUser));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
};
