export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/artists'
  })
);

export const fetchArtist = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${artistId}`
  })
);
