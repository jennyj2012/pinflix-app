class ChangePhotoIdFromPins < ActiveRecord::Migration
  def change
    change_column :pins, :photo_id, :integer, index: true
  end
end
