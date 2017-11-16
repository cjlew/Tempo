  if playlist.image && playlist.image.url != 'no_image.png'
    image = playlist.image
  elsif !playlist.songs.empty?
    idx = rand(playlist.songs.length - 1)
    image = playlist.songs[idx].album.artwork.url
  else
    image = 'no_image.png'
  end



json.set! playlist.id do
  json.extract! playlist, :id, :title, :creator_id
  json.song_ids playlist.songs.pluck(:id)
  json.creator_username playlist.creator.username
  json.image asset_path(image)

end
