import React from "react";
import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { requestAllRestaurants, requestRestaurant } from "../../actions/restaurant_actions";

const msp = state => {
  return {
    currentUser: state.session.currentUser,
    restaurants: Object.values(state.entities.restaurants),
    loading: state.ui.loading.loadingIndex,
  };
};

const mdp = dispatch => ({
  requestAllRestaurants: () => dispatch(requestAllRestaurants()),
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
});

export default connect(msp, mdp)(RestaurantIndex);