class RemoveRatingColumnFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :rating
    add_column :reviews, :overall_rating, :integer
    add_column :reviews, :food_rating, :integer
    add_column :reviews, :service_rating, :integer
    add_column :reviews, :ambience_rating, :integer
  end
end
