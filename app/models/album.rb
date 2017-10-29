# == Schema Information
#
# Table name: albums
#
#  id                   :integer          not null, primary key
#  title                :string           not null
#  release_year         :integer          not null
#  artist_id            :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  artwork_file_name    :string
#  artwork_content_type :string
#  artwork_file_size    :integer
#  artwork_updated_at   :datetime
#

class Album < ApplicationRecord
  validates :title, :release_year, :artist_id, presence: true

  has_attached_file :artwork, default_url: 'profile_test.jpeg'
  validates_attachment_content_type :artwork,
                                    content_type: /\Aimage\/.*\Z/

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

  has_many :songs,
    foreign_key: :album_id,
    class_name: 'Song'
end
