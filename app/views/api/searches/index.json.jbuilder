json.songs do
  @song_results.each do |song|
    json.partial! 'api/songs/songs', song: song
  end
end

json.artists do
  @artist_results.each do |artist|
    json.partial! 'api/artists/artists', artist: artist
  end
end

json.albums do
  @album_results.each do |album|
    json.partial! 'api/albums/albums', album: album
  end
end
