class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :start_time, :end_time, :seats, presence: true
  validates :user_id, uniqueness: { scope: :start_time }

  belongs_to :user
  belongs_to :restaurant
end