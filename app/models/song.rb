# == Schema Information
#
# Table name: songs
#
#  id                 :integer          not null, primary key
#  album_id           :integer          not null
#  title              :string           not null
#  artist_id          :integer          not null
#  explicit           :boolean          default(FALSE), not null
#  ord                :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#

class Song < ApplicationRecord
  validates :album_id, :title, :artist_id, :ord, presence: true
  validates :explicit, inclusion: { in: [true, false] }

  has_attached_file :audio, default_url: ''
  validates_attachment_content_type :audio,
                                    content_type: /\Aaudio\/.*\Z/

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
