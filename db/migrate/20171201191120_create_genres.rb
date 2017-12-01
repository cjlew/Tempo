class CreateGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :genres do |t|
      t.string :title, null: false, unique: true
      t.attachment :image
      t.timestamps
    end
  end
end
