# == Schema Information
#
# Table name: playlist_song_memberships
#
#  id           :integer          not null, primary key
#  playlist_id  :integer          not null
#  song_id      :integer          not null
#  playlist_ord :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class PlaylistSongMembership < ApplicationRecord
  validates :playlist_id, :song_id, :playlist_ord, presence: true

  has_many :songs,
    foreign_key: :song_id,
    class_name: 'Song'

  has_many :playlists,
    foreign_key: :playlist_id,
    class_name: 'Playlist'

end
