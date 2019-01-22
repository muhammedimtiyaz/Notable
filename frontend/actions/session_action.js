import { signupAjax, loginAjax, logoutAjax } from "../utils/session_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => signupAjax(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => loginAjax(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => logoutAjax()
  .then(() => dispatch(logoutCurrentUser()));