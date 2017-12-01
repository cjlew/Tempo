class AddFeaturedToPlaylists < ActiveRecord::Migration[5.1]
  def change
    change_table :playlists do |t|
      t.boolean :featured, default: false
    end
  end
end
