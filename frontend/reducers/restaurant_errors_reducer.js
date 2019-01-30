import { RECEIVE_RESTAURANT_ERRORS } from "../actions/restaurant_actions";
// import { merge } from 'lodash';

const restaurantErrorsReducer = (state = [], action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default restaurantErrorsReducer;