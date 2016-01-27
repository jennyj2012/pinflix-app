class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :title, null: false, indexed: true
      t.string :url, null: false
      t.text :description
      t.integer :author_id, null: false, indexed: true
      t.integer :board_id, null: false, indexed: true
      t.timestamps null: false
    end

  end
end
