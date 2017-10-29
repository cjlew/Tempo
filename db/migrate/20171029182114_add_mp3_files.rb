class AddMp3Files < ActiveRecord::Migration[5.1]
  def change
    change_table :songs do |t|
      t.attachment :audio
    end
  end
end
