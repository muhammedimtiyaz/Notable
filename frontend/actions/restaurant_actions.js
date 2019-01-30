import * as RestaurantApiUtil from "../utils/restaurant_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";
export const LOADING_RESTAURANT = "LOADING_RESTAURANT";
export const LOADING_RESTAURANTS = "LOADING_RESTAURANTS";


export const receiveRestaurants = (restaurants) => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants,
  };
};

export const receiveRestaurant = (restaurant) => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant,
  };
};

export const receiveRestaurantErrors = (errors) => {
  debugger
  return {
    type: RECEIVE_RESTAURANT_ERRORS,
    errors
  };
};

export const loadingRestaurant = () => {
  return {
    type: LOADING_RESTAURANT,
  };
};

export const loadingRestaurants = () => {
  return {
    type: LOADING_RESTAURANTS,
  };
};

export const requestAllRestaurants = () => dispatch => {
  return RestaurantApiUtil.fetchRestaurants().then(restaurants => dispatch(receiveRestaurants(restaurants)));
};

export const requestRestaurant = (id) => dispatch => {
  return RestaurantApiUtil.fetchRestaurant(id).then(restaurant => dispatch(receiveRestaurant(restaurant)));
};

export const createRestaurant = (restaurant) => {
  return RestaurantApiUtil.createRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant)), err => dispatch(receiveRestaurantErrors(err.responseJSON)));
};

export const searchRestaurants = searchTerm => dispatch => {
  return RestaurantApiUtil.fetchSearchRestaurants(searchTerm).then(response => dispatch(receiveRestaurants(response)), err => dispatch(receiveRestaurantErrors(err.responseJSON)));
};