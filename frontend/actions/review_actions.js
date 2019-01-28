import * as ReviewApiUtil from "../utils/review_util";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECIEVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";


export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const removeReview = id => ({
  type: REMOVE_REVIEW,
  reviewId: id,
});


export const requestRestaurantReviews = restaurantId => dispatch => {
  return ReviewApiUtil.fetchRestaurantReviews(restaurantId).then(reviews => dispatch(receiveReviews(reviews)), err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const requestReview = id => dispatch => {
  return ReviewApiUtil.fetchReview(id).then(review => dispatch(receiveReview(review)), err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const createReview = review => dispatch => {
  return ReviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)), err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const editReview = review => dispatch => {
  return ReviewApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)), err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const deleteReview = (id) => dispatch => {
  return ReviewApiUtil.deleteReview(id).then(response => dispatch(removeReview(response)), err => dispatch(receiveReviewErrors(err.responseJSON)));
};