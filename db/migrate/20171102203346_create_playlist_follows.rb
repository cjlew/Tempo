class CreatePlaylistFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_followships do |t|
      t.integer :user_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end
    add_index :playlist_followships, :user_id
    add_index :playlist_followships, :playlist_id
  end
end
