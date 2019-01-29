class Favourite < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true
  validates :user_id, uniqueness: { scope: :restaurant_id }

  belongs_to :user
  belongs_to :restaurant
end