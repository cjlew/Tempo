json.set! album.id do
  json.extract! album, :id, :title, :artist_id
  json.artist album.artist.name
  json.song_ids album.songs.pluck(:id)
  json.artwork asset_path(album.artwork.url(:original))
end
