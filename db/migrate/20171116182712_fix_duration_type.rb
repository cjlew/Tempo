class FixDurationType < ActiveRecord::Migration[5.1]
  def change
    change_column :songs, :duration, :string
  end
end
