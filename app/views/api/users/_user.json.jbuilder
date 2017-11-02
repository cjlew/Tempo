json.extract! user, :id, :username
json.profile_picture asset_path(user.profile_picture.url(:original))
json.playlist user.owned_playlists.pluck(:id)
json.friends user.friends.pluck(:id)
