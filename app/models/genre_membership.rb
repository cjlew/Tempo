# == Schema Information
#
# Table name: genre_memberships
#
#  id          :integer          not null, primary key
#  genre_id    :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class GenreMembership < ApplicationRecord
  validates :playlist_id, :genre_id, presence: true

  belongs_to :genre,
    foreign_key: :genre_id,
    class_name: 'Genre'

  belongs_to :playlist,
    foreign_key: :playlist_id,
    class_name: 'Playlist'


end
