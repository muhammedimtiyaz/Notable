import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT,
} from '../actions/restaurant_actions';

import {
  RECEIVE_FAVOURITE,
  DESTROY_FAVOURITE,
} from '../actions/favourite_actions';

import merge from 'lodash/merge';

const restaurantReducer = (state = {}, action) => {
  let favourite;
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return merge({}, state, { [action.restaurant.id]: action.restaurant });
    case RECEIVE_RESTAURANTS:
      return merge({}, action.restaurants);
    case RECEIVE_FAVOURITE:
      favourite = action.favourite;
      return merge({}, state, { [favourite.id]: favourite });
    case DESTROY_FAVOURITE:
      favourite = action.favouriteId;
      return merge({}, state, { [favourite.id]: favourite });
    default:
      return state;
  }
};

export default restaurantReducer;