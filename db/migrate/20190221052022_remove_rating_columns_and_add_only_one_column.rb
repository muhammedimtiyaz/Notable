class RemoveRatingColumnsAndAddOnlyOneColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :overall_rating
    remove_column :reviews, :food_rating
    remove_column :reviews, :service_rating
    remove_column :reviews, :ambience_rating
    add_column :reviews, :rating, :integer
  end
end
