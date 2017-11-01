export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';

export const PLAY_SONG_NOW = 'PLAY_SONG_NOW';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';

export const receiveQueue = (songIds) => ({
  type: RECEIVE_QUEUE,
  songIds
});

export const playSongNow = (songId) => ({
  type: PLAY_SONG_NOW,
  songId
});

export const queueSong = (songIds) => (dispatch) => (
  dispatch(receiveQueue(songIds))
);

export const playSong = (songId) => (dispatch) => (
  dispatch(playSongNow(songId))
);
