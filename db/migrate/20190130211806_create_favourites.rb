class CreateFavourites < ActiveRecord::Migration[5.2]
  def change
    create_table :favourites do |t|
      t.integer :user_id, null:false, index: true
      t.integer :restaurant_id, null: false, index: true

      t.timestamps
    end
    add_index :favourites, [:user_id, :restaurant_id], unique: true
  end
end
