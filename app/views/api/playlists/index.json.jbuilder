@playlists.each do |playlist|
  json.partial! 'playlists/playlists', playlist: playlist
end
