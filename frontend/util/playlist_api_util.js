export const addSong = (playlistId, songId) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistId}/add_song/${songId}`
  })
);

export const removeSong = (playlistId, songId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}/remove_song/${songId}`
  })
);


export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/playlists'
  })
);

export const fetchPlaylist = (playlistId) => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${playlistId}`
  })
);

export const createPlaylist = (playlist) => (
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: {playlist}
  })
);

export const editPlaylist = (playlist) => (
  $.ajax({
    method: 'PATCH',
    url: `api/playlists/${playlist.id}`,
    data: {playlist}
  })
);

export const deletePlaylist = (playlistId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}`,
  })
);


export const fetchFeaturedPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/browse/featured'
  })
);
