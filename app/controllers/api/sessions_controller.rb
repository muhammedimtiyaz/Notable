class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_creds(
      user_params[:user][:username],
      user_params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username or password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ['You are not signed in'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end