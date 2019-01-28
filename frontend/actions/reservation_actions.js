import * as ReservationApiUtil from "../utils/reservation_util";

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";

export const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

export const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const removeReservation = id => ({
  type: REMOVE_RESERVATION,
  reservationId: id
});

export const receiveReservationErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});

export const requestUserReservations = userId => dispatch => {
  return ReservationApiUtil.fetchUserReservations(userId).then(reservations => dispatch(receiveReservations(reservations)),
  err => dispatch(receiveReservationErrors(err.responseJSON)));
};

export const requestReservation = id => dispatch => {
  return ReservationApiUtil.fetchReservation(id).then(reservation => dispatch(receiveReservation(reservation)), 
  err => dispatch(receiveReservationErrors(err.responseJSON)));
};

export const createReservation = reservation => dispatch => {
  return ReservationApiUtil.createReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)), 
  err => dispatch(receiveReservationErrors(err.responseJSON)));
};

export const updateReservation = id => dispatch => {
  return ReservationApiUtil.updateReservation(id).then(reservation => dispatch(receiveReservation(reservation)), 
  err => dispatch(receiveReservationErrors(err.responseJSON)));
};

export const deleteReservation = id => dispatch => {
  return ReservationApiUtil.deleteReservation(id).then(reservation => dispatch(removeReservation(reservation)), err => dispatch(receiveReservationErrors(err.responseJSON)));
};