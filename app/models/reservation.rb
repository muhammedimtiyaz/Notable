class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :time, :date, :seats, presence: true
  validates :user_id, uniqueness: { scope: [:time, :date] }

  belongs_to :user
  belongs_to :restaurant
end