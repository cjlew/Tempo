image = 'https://s3.us-east-2.amazonaws.com/tempo-chris-pro/assets/music_note_black.png'

json.set! playlist.id do
  json.extract! playlist, :id, :title, :creator_id
  # json.songs playlist.songs
  json.song_ids playlist.songs.pluck(:id)
  json.creator_username playlist.creator.username
  json.image image

end
# asset_path(playlist.image.url(:original))
