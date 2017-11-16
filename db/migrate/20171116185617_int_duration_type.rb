class IntDurationType < ActiveRecord::Migration[5.1]
  def change
    remove_column :songs, :duration, :string

    add_column :songs, :duration, :integer
  end
end
