class RemoveUserFromPins < ActiveRecord::Migration
  def change
    remove_column :pins, :author_id
  end
end
