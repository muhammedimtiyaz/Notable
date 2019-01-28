import { RECEIVE_FAVOURITE_ERRORS } from '../actions/favourite_actions';
// import { merge } from 'lodash';


const favouritesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVOURITE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default favouritesErrorsReducer;