# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums,
    foreign_key: :artist_id,
    class_name: 'Album'

  has_many :songs,
    foreign_key: :artist_id,
    class_name: 'Song'
end
