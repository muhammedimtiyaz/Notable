import { merge } from 'lodash';
import {
  RECEIVE_FAVOURITES,
  RECEIVE_FAVOURITE,
  DESTROY_FAVOURITE,
} from '../actions/favourite_actions';


const favouritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FAVOURITES:
      return action.favourites;
    case RECEIVE_FAVORITE:
      const favorite = action.favorite;
      return merge({}, state, { [favorite.id]: favorite });
    case DESTROY_FAVOURITE:
      let newState = merge({}, state);
      delete newState[action.favouriteId];
      return newState;
    default:
      return state;
  }
};


export default favouritesReducer;