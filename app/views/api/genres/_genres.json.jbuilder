genre.set! genre.id do
  json.extract! genre, :title
  json.playlist_ids genre.playlists.pluck(:id)
  json.image asset_path(genre.image.url(:original))
end
