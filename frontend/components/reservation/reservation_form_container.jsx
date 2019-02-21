import React from "react";
import { connect } from "react-redux";
import { createReservation, receiveReservationErrors } from "../../actions/reservation_actions";
import ReservationForm from "./reservation_form";

const msp = ({entities, session, errors}) => {
  return {
    currentUser: session.currentUser,
    restaurants: entities.restaurants,
    errors: errors.reservation
  };
};

const mdp = dispatch => ({
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  removeErrors: () => dispatch(receiveReservationErrors([])),
});

export default connect(msp, mdp)(ReservationForm);
