export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const PLAY_SONG_NOW = 'PLAY_SONG_NOW';
export const PLAY_PREVIOUS_SONG = 'PLAY_PREVIOUS_SONG';
export const PLAY_NEXT_SONG = 'PLAY_NEXT_SONG';
export const PLAY = 'PLAY';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const PAUSE = 'PAUSE';

export const togglePlay = () => ({
  type:TOGGLE_PLAY
});

export const play=() => ({
  type: PLAY
});

export const pause=() => ({
  type: PAUSE
});

export const receiveQueue = (songIds) => ({
  type: RECEIVE_QUEUE,
  songIds
});

export const playSongNow = (songId) => ({
  type: PLAY_SONG_NOW,
  songId
});

export const playNextSong = () => ({
  type: PLAY_NEXT_SONG
});

export const playPrevSong = () => ({
  type: PLAY_PREVIOUS_SONG
});

export const queueSong = (songIds) => (dispatch) => (
  dispatch(receiveQueue(songIds))
);

export const playSong = (songId) => (dispatch) => (
  dispatch(playSongNow(songId))
);

export const nextSong = () => (dispatch) => (
  dispatch(playNextSong())
);

export const prevSong = () => (dispatch) => (
  dispatch(playPrevSong())
);

export const playPlayer = () => (dispatch) => (
  dispatch(play())
) ;

export const pausePlayer = () => (dispatch) => (
  dispatch(pause())
) ;

export const togglePlayer = () => (dispatch) =>(
  dispatch(togglePlay())
);
