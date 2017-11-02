import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (userId) => (dispatch) => (
  APIUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
);

export const addFriend = (friendId) => (dispatch) => (
  APIUtil.addFriend(friendId)
    .then((user) => dispatch(receiveUser(user)))
);

export const removeFriend = (friendId) => (dispatch) => (
  APIUtil.removeFriend(friendId)
    .then((user) => dispatch(receiveUser(user)))
);

export const followPlaylist = (playlistId) => (dispatch) => (
  APIUtil.followPlaylist(playlistId)
    .then((user) => dispatch(receiveUser(user)))
);

export const unfollowPlaylist = (playlistId) => (dispatch) => (
  APIUtil.unfollowPlaylist(playlistId)
    .then((user) => dispatch(receiveUser(user)))
);
