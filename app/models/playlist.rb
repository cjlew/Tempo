# == Schema Information
#
# Table name: playlists
#
#  id                 :integer          not null, primary key
#  creator_id         :integer          not null
#  title              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#
class Playlist < ApplicationRecord
  validates :creator_id, :title, presence: true

  has_attached_file :image, default_url: 'no_image.png'
  validates_attachment_content_type :image,
                                    content_type: /\Aimage\/.*\Z/

  belongs_to :creator,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: 'User'

  has_many :playlist_song_memberships,
    foreign_key: :playlist_id,
    class_name: 'PlaylistSongMembership',
    dependent: :destroy

  has_many :songs,
    through: :playlist_song_memberships,
    source: :song

  has_many :playlist_followships,
    class_name: 'PlaylistFollowship',
    foreign_key: :playlist_id,
    dependent: :destroy

  has_many :followers,
    through: :playlist_followships,
    source: :user

  def add_song(song_id)
    song_ord = self.playlist_song_memberships.last ?  self.playlist_song_memberships.last.playlist_ord + 1 : 1
    PlaylistSongMembership.create!({playlist_id: self.id, song_id: song_id, playlist_ord: song_ord})
  end

  def remove_song(song_id)
    self.playlist_song_memberships.find_by(song_id: song_id).delete
  end


end
