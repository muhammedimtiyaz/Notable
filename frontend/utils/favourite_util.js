export const createFavourite = favourite => (
  $.ajax({
    method: 'POST',
    url: '/api/favourites',
    data: { favourite }
  })
);

export const fetchUserFavourites = userId => (
  $.ajax({
    method: 'GET',
    url: '/api/favourites',
    data: {userId}
  })
);

export const fetchFavourite = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/favourites/${id}`
  })
);


export const deleteFavourite = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favourites/${id}`,
  })
);