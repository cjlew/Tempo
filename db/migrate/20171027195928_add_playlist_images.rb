class AddPlaylistImages < ActiveRecord::Migration[5.1]
  def change
    change_table :playlists do |t|
      t.attachment :images
    end
  end
end
