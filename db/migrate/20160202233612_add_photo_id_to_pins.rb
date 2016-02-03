class AddPhotoIdToPins < ActiveRecord::Migration
  def change
    add_column :pins, :photo_id, :integer
  end
end
