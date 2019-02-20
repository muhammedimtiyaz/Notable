import { combineReducers } from 'redux';

import restaurants from "./restaurant_reducer";
import favourites from "./favourites_reducer";
import reviews from "./reviews_reducer";
import reservations from "./reservations_reducer";

export default combineReducers({
  restaurants,
  favourites,
  reviews,
  reservations
});