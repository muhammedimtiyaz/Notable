import { combineReducers } from 'redux';

import users from './users_reducer';
import restaurants from "./restaurant_reducer";
import favourites from "./favourites_reducer";
import reviews from "./reviews_reducer";

export default combineReducers({
  users,
  restaurants,
  favourites,
  reviews,
});