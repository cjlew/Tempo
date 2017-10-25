# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  album_id   :integer          not null
#  title      :string           not null
#  artist_id  :integer          not null
#  explicit   :boolean          default(FALSE), not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :album_id, :title, :artist_id, :explicit, :ord, presence: true

  has_many :playlist_song_memberships,
    foreign_key: :song_id,
    class_name: 'PlaylistSongMembership'
    
  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

  belongs_to :album,
    foreign_key: :album_id,
    class_name: 'Album'

end
