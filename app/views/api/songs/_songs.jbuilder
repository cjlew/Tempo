json.set! song.id do
  json.extract! song, :id, :title, :explicit, :artist_id, :album_id
  json.artist_name song.artist.name
  json.album_name song.album.title
end
