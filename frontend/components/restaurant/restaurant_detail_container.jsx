import React from "react";
import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_actions";
import RestaurantDetail from "./restaurant_detail";
import { createFavourite, deleteFavourite } from "../../actions/favourite_actions";
import { deleteReview } from "../../actions/review_actions";


const msp = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
  currentUser: state.session.currentUser,
  loading: state.ui.loading.loadingIndex,
});

const mdp = dispatch => ({
  requestRestaurant: (id) => dispatch(requestRestaurant(id)),
  createFavourite: (favourite) => dispatch(createFavourite(favourite)),
  deleteFavourite: (favouriteId) => dispatch(deleteFavourite(favouriteId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(msp, mdp)(RestaurantDetail);