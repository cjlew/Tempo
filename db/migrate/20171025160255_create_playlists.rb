class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false

      t.timestamps
    end
    add_index :playlists, :creator_id
    add_index :playlists, :title
  end
end
