class Review < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true
  validates :overall_rating, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true
  validates :food_rating, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true
  validates :service_rating, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true
  validates :ambience_rating, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true
  validates :comment, length: { maximum: 1000 }
  validates :user_id, uniqueness: { scope: :restaurant_id }

  belongs_to :user
  belongs_to :restaurant

end