json.set! artist.id do
  json.extract! artist, :id, :name
  json.album_ids artist.albums.pluck(:id)
  json.song_ids artist.songs.pluck(:id)
  json.image asset_path(artist.image.url(:original))
end
