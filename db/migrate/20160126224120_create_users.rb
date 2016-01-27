class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, indexed: true, uniqueness: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, indexed: true, uniqueness: true
      t.string :email, null: false, indexed: true, uniqueness: true
      t.timestamps null: false
    end
  end
end
