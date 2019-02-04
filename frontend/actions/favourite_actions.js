import * as FavouriteApiUtil from '../utils/favourite_util';

export const RECEIVE_FAVOURITES = 'RECEIVE_FAVOURITES';
export const RECEIVE_FAVOURITE = 'RECEIVE_FAVOURITE';
export const DESTROY_FAVOURITE = 'DESTROY_FAVOURITE';
export const RECEIVE_FAVOURITE_ERRORS = 'RECEIVE_FAVOURITE_ERRORS';

export const receiveFavourites = (favourites) => ({
  type: RECEIVE_FAVOURITES,
  favourites
});

export const receiveFavourite = (favourite) => ({
  type: RECEIVE_FAVOURITE,
  favourite,
});

export const removeFavourite = (favouriteId) => ({
  type: DESTROY_FAVOURITE,
  favouriteId
});


export const receiveFavouriteErrors = (errors) => ({
  type: RECEIVE_FAVOURITE_ERRORS,
  errors
});

export const createFavourite = favourite => dispatch => (
  FavouriteApiUtil.createFavourite(favourite)
    .then((favourite) => {
      dispatch(receiveFavourite(favourite));
    }, err => (dispatch(receiveFavouriteErrors(err.responseJSON))))
);


export const requestFavourite = (id) => dispatch => (
  FavouriteApiUtil.fetchFavourite(id)
  .then(favourite => {
    dispatch(receiveFavourite(favourite));
    return favourite;
  })
);

export const requestUserFavourites = userId => dispatch => (
  FavouriteApiUtil.fetchUserFavourites(userId)
    .then(favourites => dispatch(receiveFavourites(favourites)),
          err => dispatch(receiveFavouriteErrors(err.responseJSON)))
);




export const deleteFavourite = id => dispatch => (
  FavouriteApiUtil.deleteFavourite(id)
    .then(favourite => dispatch(removeFavourite(favourite)),
      err => {
       return dispatch(receiveFavouriteErrors(err.responseJSON))
      })
);