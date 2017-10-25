# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  creator_id :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :creator_id, :title, presence: true

  has_many :playlist_song_memberships,
    foreign_key: :playlist_id,
    class_name: 'Playlist'

  has_many :songs,
    through: :playlist_song_memberships,
    source: :songs
end
