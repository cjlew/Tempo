import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const fetchAlbum = (albumId) => (dispatch) => (
  APIUtil.fetchAlbum(albumId)
    .then((album) => (dispatch(receiveAlbum(album))))
);

export const fetchAlbums = () => (dispatch) => (
  APIUtil.fetchAlbums()
    .then((albums) => (dispatch(receiveAlbums(albums))))
);
