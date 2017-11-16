json.set! album.id do
  json.extract! album, :id, :title, :artist_id
  json.artist album.artist
  json.song_ids album.songs.pluck(:id)
  json.image asset_path(album.artwork.url(:original))
end
