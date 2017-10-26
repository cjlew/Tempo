json.extract! user, :id, :username

json.playlist_ids user.owned_playlists.pluck(:id)
