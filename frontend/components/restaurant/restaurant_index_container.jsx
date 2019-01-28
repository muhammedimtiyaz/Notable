import React from "react";
import RestaurantIndex from "./restaurant_index";
import { connect } from "react-redux";
import { requestAllRestaurants, requestRestaurant } from "../../actions/restaurant_actions";

const msp = state => ({
  currentUser: state.session.currentUser,
  restaurants: Object.values(state.entities.restaurants),
  loading: state.ui.loading.loadingIndex,
});

const mdp = dispatch => ({
  requestAllRestaurants: () => dispatch(requestAllRestaurants()),
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
});

export default connect(msp, mdp)(RestaurantIndex);