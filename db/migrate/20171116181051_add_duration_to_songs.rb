class AddDurationToSongs < ActiveRecord::Migration[5.1]
  def change
    change_table :songs do |t|
      t.integer :duration
    end
  end
end
