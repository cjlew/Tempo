@genres.each do |genre|
  json.partial! 'api/genres/genres', genre: genre
end
