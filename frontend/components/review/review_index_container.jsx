import React from "react";
import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { requestRestaurantReviews, deleteReview } from "../../actions/review_actions";

const msp = (state, ownProps) => ({
  currentUser: state.session.currenUser,
  reviews: Object.values(state.entities.reviews),
  restaurantId: ownProps.match.params.restaurantId,
  restaurant: this.state.restaurants[ownProps.match.params.restaurantId],
});

const mdp = dispatch => ({
  requestRestaurantReviews: restaurantId => dispatch(requestRestaurantReviews(restaurantId)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
});

export default connect(msp, mdp)(ReviewIndex);