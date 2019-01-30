class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.string :time, null: false
      t.string :date, null: false
      t.integer :seats, null: false

      t.timestamps
    end
    add_index :reservations, [:user_id, :time, :date], unique: true
    add_index :reservations, :restaurant_id
  end
end
