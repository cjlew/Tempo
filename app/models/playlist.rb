# == Schema Information
#
# Table name: playlists
#
#  id                  :integer          not null, primary key
#  creator_id          :integer          not null
#  title               :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  images_file_name    :string
#  images_content_type :string
#  images_file_size    :integer
#  images_updated_at   :datetime
#

class Playlist < ApplicationRecord
  validates :creator_id, :title, presence: true

  has_attached_file :image, default_url: 'profile_test.jpeg'
  validates_attachment_content_type :image,
                                    content_type: /\Aimage\/.*\Z/

  belongs_to :creator,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: 'User'

  has_many :playlist_song_memberships,
    foreign_key: :playlist_id,
    class_name: 'PlaylistSongMembership'

  has_many :songs,
    through: :playlist_song_memberships,
    source: :song
end
