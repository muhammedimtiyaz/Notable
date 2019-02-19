class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :time, :date, :seats, presence: true

  belongs_to :user
  
  belongs_to :restaurant
end