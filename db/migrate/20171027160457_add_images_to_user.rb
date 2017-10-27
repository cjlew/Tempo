class AddImagesToUser < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.attachment :profile_picture
    end
  end
end
