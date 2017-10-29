class AddArtistImages < ActiveRecord::Migration[5.1]
  def change
    change_table :artists do |t|
      t.attachment :image
    end
  end
end
