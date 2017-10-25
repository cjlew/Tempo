class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.boolean :explicit, null: false, default: false
      t.integer :ord, null: false

      t.timestamps
    end
    add_index :songs, :album_id
    add_index :songs, :artist_id
  end
end
