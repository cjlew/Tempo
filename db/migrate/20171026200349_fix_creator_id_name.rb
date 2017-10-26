class FixCreatorIdName < ActiveRecord::Migration[5.1]
  def change
    rename_column :playlists, :creator_id, :user_id
  end
end
