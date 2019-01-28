import { RECEIVE_RESERVATION_ERRORS, RECEIVE_RESERVATIONS, RECEIVE_RESERVATION } from "../actions/reservation_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return [];
    case RECEIVE_RESERVATION:
      return [];
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    default:
      return state;
  }
}