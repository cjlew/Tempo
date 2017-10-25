@playlists.each do |playlist|
  json.partial! 'api/playlists/playlists', playlist: playlist
end
