import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import {
  requestUserReservations,
  deleteReservation
} from '../../actions/reservation_actions';

import {
  requestUserFavourites,
  deleteFavourite
} from '../../actions/favourite_actions';

const msp = state => ({
  currentUser: state.session.currentUser,
  reservations: state.entities.reservations,
  favourites: state.entities.favourites
});

const mdp = dispatch => ({
  requestUserReservations: (userId) => dispatch(requestUserReservations(userId)),
  deleteReservation: (id) => dispatch(deleteReservation(id)),
  requestUserFavourites: (userId) => dispatch(requestUserFavourites(userId)),
  deleteFavourite: (id) => dispatch(deleteFavourite(id))
});

export default connect(msp, mdp)(Profile);