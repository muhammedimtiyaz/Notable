class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

    def show
      @user = User.where(:id => current_user.id).first
      render :show
    end

    def get_favorites
      if current_user
        favourites = Favourites.where(:id => current_user.id)

        favourite_restaurants = {}
        favourites.each do |favourite|
          restaurant = Restaurant.where(:id => restaurant_id).first
          favourite_restaurants[restaurant.id] = restaurant unless restaurant.nil?
        end
        render json: favourite_restaurants
      else
        render json: {}
    end

    def add_favourite_restaurant
      if current_user
        @favourite = Favourites.where(:user_id => current_user.id).where(:restaurant_id => params[:restaurantId]).first

        if @favourite.nil?
          @favourite.restaurant_id = params[:restaurantId]
          @favourite.user_id = current_user.id
          @favourite.save!
        end

        render json: Restaurant.where(:id => @favourite.restaurant_id).first
      else
        render json: {}
      end
    end

    def remove_favourite
      if current_user
        @favourite = Favourites.where(:user_id => current_user.id).where(:restaurant_id => params[:restaurantId]).first

        if @favourite
          @favourite.destroy!
        end

        render json: @favourite.restaurant_id
      else
        render json: {}
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :username, :email, :password)
  end
end