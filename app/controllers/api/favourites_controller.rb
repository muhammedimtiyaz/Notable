class Api::FavouritesController < ApplicationController
  def index
    @favourites = current_user.favourites
  end

  def show
    @favourite = Favourite.find(params[:id])
  end

  def create
    @favourite = Favourite.new
    @favourite.user_id, @favourite.restaurant_id = current_user.id, params[:id]

    if @favourite.save
      @restaurant = @favourite.restaurant
      render '/api/restaurants/show'
    else
      render json: @favourite.errors.full_messages, status: 401
    end
  end

  def destroy
    @favourite = Favourite.find_by(user_id: current_user.id, restaurant_id: params[:id])

    if @favourite
      @restaurant = @favourite.restaurant
      @favourite.destroy
      render '/api/restaurants/show'
    else
      render json: ["This restaurant is not in your favourites list"], status: 404
    end
  end

  private

  # def favourite_params
  #   params.require(:favourite).permit(:user_id, :restaurant_id)
  # end
end