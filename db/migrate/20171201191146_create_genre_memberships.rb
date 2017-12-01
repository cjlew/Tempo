class CreateGenreMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :genre_memberships do |t|
      t.integer :genre_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end
    add_index :genre_memberships, :playlist_id
    add_index :genre_memberships, :genre_id
  end
end
