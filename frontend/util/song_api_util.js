export const fetchSongs = () => (
  $.ajax({
    method: 'GET',
    url: 'api/songs'
  })
);
