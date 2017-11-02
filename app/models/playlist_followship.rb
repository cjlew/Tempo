# == Schema Information
#
# Table name: playlist_followships
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollowship < ApplicationRecord
  validates :user_id, :playlist_id, presence: true

  belongs_to :user,
    foreign_key: user_id,
    class_name: 'User'

  belongs_to :playlist,
    foreign_key: :playlist_id,
    class_name: 'Playlist'
end
