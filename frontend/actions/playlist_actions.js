import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const deletePlaylist = (playlistId) => (dispatch) => (
  APIUtil.deletePlaylist(playlistId)
    .then((playlist) => (dispatch(removePlaylist(playlist.id))))
);

export const createPlaylist = (newPlaylist) => (dispatch) => (
  APIUtil.createPlaylist(newPlaylist)
    .then((playlist) => (dispatch(receivePlaylist(playlist))))
);

export const fetchPlaylist = (playlistId) => (dispatch) => (
  APIUtil.fetchPlaylist(playlistId)
    .then((playlist) => (dispatch(receivePlaylist(playlist))))
);

export const fetchPlaylists = () => (dispatch) => (
  APIUtil.fetchPlaylists()
    .then((playlists) => (dispatch(receivePlaylists(playlists))))
);

export const editPlaylist = (edittedPlaylist) => (dispatch) => (
  APIUtil.editPlaylist(edittedPlaylist)
    .then((playlist) => (dispatch(receivePlaylist(playlist))))
);
