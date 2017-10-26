
json.set! playlist.id do
  json.extract! playlist, :id, :title, :creator_id
  jsoon.song_ids playlist.songs.pluck(:id)
  json.creator_username playlist.creator.username
end
