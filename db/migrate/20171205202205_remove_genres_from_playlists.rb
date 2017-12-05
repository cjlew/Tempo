class RemoveGenresFromPlaylists < ActiveRecord::Migration[5.1]
  def change
    remove_column(:playlists, :genre)
  end
end
