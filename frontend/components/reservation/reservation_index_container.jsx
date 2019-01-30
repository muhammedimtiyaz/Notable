import React from "react";
import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import {requestUserReservations } from "../../actions/reservation_actions";

const msp = state => ({
  currentUser: state.session.currentUser,
  reservations: Object.values(state.entities.reservations),
});

const mdp = dispatch => ({
  requestUserReservations: userId => dispatch(requestUserReservations(userId)),
});

export default connect(msp, mdp)(ReservationIndex);
