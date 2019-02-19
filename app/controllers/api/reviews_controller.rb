class Api::ReviewsController < ApplicationController
  def index
    current_restaurant = Restaurant.find(params[:restaurantId]) if params[:restaurantId]

    if current_restaurant
      @reviews = current_restaurant.reviews.order(:created_at)
    else
      render json: ["Restaurant not found"], status: 404
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.find(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
    # relevant_reservations = current_user.reservations.where(restaurant_id: params[:restaurantId])
    # current_reservation = relevant_reservations.order(created_at: :desc).first
    # if Time.now > current_reservation.time
    #   @review = current_user.reviews.new(review_params)
    #   if @review.save
    #     render :show
    #   else
    #     render json: @review.errors.full_messages, status: 422
    #   end
    # else
    #   render json: ['Can\'t post review yet']
    # end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
    # @review = current_user.reviews.find(params[:id])
    # if @review && @review.update_attributes(review_params)
    #   render :show
    # else
    #   render json: @review.errors.full_messages, status: 422
    # end
  end

  def destroy
    review = Review.find(params[:id])
    if review
      review.destroy
      render json: review
    else
      render json: ["Review doesn't exist"], status: 404
    end
    # @review = Review.find_by(user_id: current_user.id, restaurant_id: params[:id])

    # if @review
    #   @restaurant = @review.restaurant
    #   @review.destroy
    #   render '/api/restaurants/show'
    # else
    #   render json: ['You haven\'t posted a review for this restaurant yet'], status: 404
    # end
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :restaurant_id, :rating, :comment)
  end
end