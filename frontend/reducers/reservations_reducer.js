import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION } from "../actions/reservation_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return action.reservations;
    case RECEIVE_RESERVATION:
      return merge({}, state, { [action.reservation.id]: action.reservation });
    case REMOVE_RESERVATION:
      let newState = merge({}, state);
      delete newState[action.reservationId];
      return newState;
    default:
      return state;
  }
};