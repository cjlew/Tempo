# == Schema Information
#
# Table name: genres
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Genre < ApplicationRecord
  validates :title, presence: true

  has_attached_file :image, default_url: 'no_image.png'
  validates_attachment_content_type :image,
                                    content_type: /\Aimage\/.*\Z/

  has_many :genre_memberships,
    foreign_key: :genre_id,
    class_name: 'GenreMembership'

  has_many :playlists,
    through: :genre_memberships,
    source: :playlist


end
