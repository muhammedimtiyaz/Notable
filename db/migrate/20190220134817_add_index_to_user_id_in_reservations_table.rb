class AddIndexToUserIdInReservationsTable < ActiveRecord::Migration[5.2]
  def change
    add_index :reservations, :user_id
  end
end
