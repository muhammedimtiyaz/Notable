class Api::ReservationsController < ApplicationController
  def index
    user = User.find_by(id: params[:userId])

    if user
      @reservations = user.reservations.order(date: :asc)
      render :index
    else
      render json: ["User not found"], status: 404
    end
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id
    @reservation.restaurant_id = params[:reservation][:restaurant_id]
    if @reservation.save
      render "/api/reservations/show"
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def show
    @reservation = Reservation.find(params[:id])
    render :show
  end

  def destroy
    reservation = Reservation.find(params[:id])

    if reservation
      reservation.destroy
      render json: reservation
    else
      render json: ["Reservation does not exist"], status: 404
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:time, :date, :seats)
  end
end