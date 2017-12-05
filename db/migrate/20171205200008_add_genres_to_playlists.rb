class AddGenresToPlaylists < ActiveRecord::Migration[5.1]
  def change
    change_table :playlists do |t|
      t.string :genre
    end
  end
end
