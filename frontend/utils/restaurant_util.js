export const fetchRestaurants = () => (
  $.ajax({
    method: "GET",
    url: 'api/restaurants',
  })
);

export const fetchRestaurant = (restaurantId) => (
  $.ajax({
    method: "GET",
    url: `api/restaurants/${restaurantId}`,
  })
);

export const createRestaurant = (restaurant) => (
  $.ajax({
    method: "POST",
    url: `api/users/${restaurant.owner_id}/restaurants`,
    data: { restaurant },
  })
);

export const fetchSearchRestaurants = (searchTerm) => (
  $.ajax({
    method: "GET",
    url: 'api/restaurants',
    data: { searchTerm },
  })
);