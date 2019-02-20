export const createFavourite = id => (
  $.ajax({
    method: 'POST',
    url: '/api/favourites',
    data: { id }
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
    data: { id }
  })
);