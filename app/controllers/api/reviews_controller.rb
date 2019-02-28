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
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.restaurant_id = params[:review][:restaurant_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
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
    params.require(:review).permit(:rating, :comment)
  end
end