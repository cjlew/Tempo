  if playlist.songs.length > 0
    idx = rand(playlist.songs.length - 1)
    image = playlist.songs[idx].album.artwork.url
  else
    image = 'no_image.png'
  end



json.set! playlist.id do
  json.extract! playlist, :id, :title, :creator_id
  # json.songs playlist.songs
  json.song_ids playlist.songs.pluck(:id)
  json.creator_username playlist.creator.username
  json.image asset_path(image)

end
# asset_path(playlist.image.url(:original))
