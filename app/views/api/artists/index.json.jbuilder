@artists.each do |artist|
  json.partial! 'api/artists/artists', artist: artist
end
