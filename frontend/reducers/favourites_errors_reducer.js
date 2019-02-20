import { RECEIVE_FAVOURITE_ERRORS } from '../actions/favourite_actions';

const FavouritesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVOURITE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default FavouritesErrorsReducer;