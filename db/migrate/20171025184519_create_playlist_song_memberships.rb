class CreatePlaylistSongMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_song_memberships do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.integer :playlist_ord, null: false

      t.timestamps
    end
    add_index :playlist_song_memberships, :playlist_id
    add_index :playlist_song_memberships, :song_id
  end
end
