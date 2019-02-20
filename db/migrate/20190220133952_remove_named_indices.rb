class RemoveNamedIndices < ActiveRecord::Migration[5.2]
  def change
    remove_index(:reviews, name: "index_reviews_on_user_id_and_restaurant_id")
    remove_index(:reservations, name: "index_reservations_on_user_id_and_time_and_date")
  end
end
