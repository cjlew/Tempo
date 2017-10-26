class FixCreatorIdNameAgain < ActiveRecord::Migration[5.1]
  def change
    rename_column :playlists, :user_id, :creator_id
  end
end
