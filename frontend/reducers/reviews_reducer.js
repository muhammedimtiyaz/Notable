import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, UPDATE_REVIEW } from "../actions/review_actions";
import { merge } from 'lodash';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
      // return merge({}, state, action.response);
    case UPDATE_REVIEW:
      const updatedReview = action.review;
      return merge({}, state, { [updatedReview.id]: updatedReview });
    default:
      return state;
  }
};

export default ReviewsReducer;