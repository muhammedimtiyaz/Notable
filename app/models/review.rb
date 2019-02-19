class Review < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true

  belongs_to :user

  belongs_to :restaurant
end