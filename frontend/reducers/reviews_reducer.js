import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;