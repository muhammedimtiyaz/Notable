class Api::RestaurantsController < ApplicationController

  def index
    if params[:searchTerm]
      @restaurants = Restaurant.find_by_keyword(params[:searchTerm])
      if  @restaurants
        render json: @restaurants
      else
        render json: ["No Restaurants Found"], status: 404
      end
    else
      @restaurants = Restaurant.all
      render :index
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    if @restaurant
      render :show
    else
      render json: ["This restaurant does not exist"]
    end
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.owner_id = current_user.id

    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(
        # :owner_id,
        :name,
        :address,
        :star,
        :city,
        :state,
        :zipcode,
        :phone_number,
        :open_time,
        :close_time,
        :cuisine,
        :description,
        :logo
      )
  end

end