@albums.each do |album|
  json.partial! 'api/albums/albums', album: album
end
