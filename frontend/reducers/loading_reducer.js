import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT_ERRORS, LOADING_RESTAURANT, LOADING_RESTAURANTS } from "../actions/restaurant_actions";
import { merge } from 'lodash';

const initialState = {
  loadingIndex: false,
  loadingShow: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return merge({}, state, { loadingShow: false });
    case RECEIVE_RESTAURANTS:
      return merge({}, state, { loadingIndex: false });
    case RECEIVE_RESTAURANT_ERRORS:
      return merge({}, state, { loadingShow: false, loadingIndex: false });
    case LOADING_RESTAURANT:
      return merge({}, state, { loadingShow: true });
    case LOADING_RESTAURANTS:
      return merge({}, state, { loadingIndex: true });
    default:
      return state;
  }
};

export default loadingReducer;