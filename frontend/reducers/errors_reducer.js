import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import restaurant from "./restaurant_errors_reducer";
import favourite from "./favourites_errors_reducer";
import review from "./reviews_errors_reducer";
import reservation from "./reservations_errors_reducer";

export default combineReducers({
  session,
  restaurant,
  favourite,
  review,
  reservation
});