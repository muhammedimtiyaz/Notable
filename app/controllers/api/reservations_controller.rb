class Api::ReservationsController < ApplicationController
  def index
    @reservations = current_user.reservations.order(:date)
    render :index
  end

  def show
    @reservation = Reservation.find_by(id: params[:id])
    if @reservation
      render json: @reservation
    else
      render json: ["No reservation found"], status: 404
    end
  end

  def update
    @reservation = Reservation.find(id: params[:id])
    if @reservation.update_attributes(reservation_params)
      render :show, {message: "Your reservation has been updated"}
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = current_user.reservations.where(id: params[:id])
    if @reservation
      @reservation.destroy
      render :index
    else
      render json: ['The reservation does not exist'], status: 404
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :restaurant_id, :time, :date, :seats)
  end
end