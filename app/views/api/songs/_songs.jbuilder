json.set! song.id do
  json.extract! song, :id, :title, :explicit, :artist_id, :album_id
  json.artist_name song.artist.name
  json.album_name song.album.title
  json.duration song.duration
  json.song_url asset_path(song.audio.url(:original))
  json.artwork asset_path(song.album.artwork.url(:original))
end
