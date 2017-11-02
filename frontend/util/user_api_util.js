
export const fetchUser = (userId) =>(
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
);

export const addFriend = (friendId) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${friendId}/add_friend`
  })
);

export const removeFriend = (friendId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${friendId}/remove_friend`
  })
);

export const followPlaylist = (playlistId) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistId}/follow`
  })
);


export const unfollowPlaylist = (playlistId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}/unfollow`
  })
);
