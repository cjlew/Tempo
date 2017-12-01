export const fetchGenres = () => (
  $.ajax({
    method: 'GET',
    url: 'api/genres'
  })
);

export const fetchGenre = (genreId) => (
  $.ajax({
    method: 'GET',
    url: `api/genres/${genreId}`
  })
);
