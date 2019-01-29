class Api::ReviewsController < ApplicationController
  def index
    current_restaurant = Restaurant.find(params[:restaurantId])
    @reviews = current_restaurant.reviews.order(:created_at)
    if @reviews.count > 0
      render json: @reviews
    else
      render json: ['No reviews yet']
    end
  end

  def show
    @review = review.find(params[:id])
  end

  def create
    relevant_reservations = current_user.reservations.where(restaurant_id: params[:restaurantId])
    current_reservation = relevant_reservations.order(created_at: :desc).first
    if Time.now > current_reservation.end_time
      @review = current_user.reviews.new(review_params)
      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: 422
      end
    else
      render json: ['Can\'t post review yet']
    end
  end

  def update
    @review = current_user.reviews.find(params[:id])
    if @review && @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(user_id: current_user.id, restaurant_id: params[:id])

    if @review
      @restaurant = @review.restaurant
      @review.destroy
      render '/api/restaurants/show'
    else
      render json: ['You haven\'t posted a review for this restaurant yet'], status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:restaurant_id, :overall_rating, :food_rating, :service_rating, :ambience_rating, :comment)
  end
end