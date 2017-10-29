# == Schema Information
#
# Table name: artists
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Artist < ApplicationRecord
  validates :name, presence: true

  has_attached_file :image, default_url: 'profile_test.jpeg'
  validates_attachment_content_type :image,
                                    content_type: /\Aimage\/.*\Z/

  has_many :albums,
    foreign_key: :artist_id,
    class_name: 'Album'

  has_many :songs,
    foreign_key: :artist_id,
    class_name: 'Song'
end
