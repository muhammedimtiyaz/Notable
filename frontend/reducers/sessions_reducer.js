import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_action";
import { merge } from "lodash";

const _nullSession = {
  currentUser: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};