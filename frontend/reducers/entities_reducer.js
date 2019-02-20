import { combineReducers } from 'redux';

import user from "./users_reducer";
import restaurants from "./restaurant_reducer";
import favourites from "./favourites_reducer";
import reviews from "./reviews_reducer";
import reservations from "./reservations_reducer";

export default combineReducers({
  user,
  restaurants,
  favourites,
  reviews,
  reservations
});