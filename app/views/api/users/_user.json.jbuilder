json.extract! user, :id, :username
json.playlist user.owned_playlists.pluck(:id)
