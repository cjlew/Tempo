json.extract! user, :id, :username
json.profile_picture asset_path(user.profile_picture.url(:original))
json.playlist user.owned_playlists.pluck(:id)

if user.id == current_user.id
  friend_ids = user.friends.pluck(:id)
  if friend_ids.length > 0
    json.friends do
      friend_ids.each do |id|
        json.set! id, id
      end
    end
  else
    json.friends {}
  end
end
