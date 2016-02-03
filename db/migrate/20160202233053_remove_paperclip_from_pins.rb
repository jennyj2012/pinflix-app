class RemovePaperclipFromPins < ActiveRecord::Migration
  def change
    remove_column :pins, :url
    remove_column :pins, :image_file_name
    remove_column :pins, :image_content_type
    remove_column :pins, :image_file_size
    remove_column :pins, :image_updated_at
  end
end
