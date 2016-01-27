class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.integer :author_id, null: false, indexed: true
      t.string :title, null: false, indexed: true
      t.text :description

      t.timestamps null: false
    end
  end
end
