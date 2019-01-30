import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createReview, receiveReviewErrors } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const msp = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.review,
});

const mdp = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  removeErrors: () => dispatch(receiveReviewErrors([])),
});

export default withRouter(connect(msp, mdp)(ReviewForm));