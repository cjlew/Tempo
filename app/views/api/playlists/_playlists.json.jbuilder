json.set! playlist.id do
  json.extract! playlist, :id, :title, :creator_id
  # json.songs playlist.songs
  json.song_ids playlist.songs.pluck(:id)
  json.creator_username playlist.creator.username
end
