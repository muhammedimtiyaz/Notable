json.extract! restaurant,
:id,
:owner_id,
:name,
:address,
:star,
:city,
:state,
:zipcode,
:phone_number,
:open_time,
:close_time,
:cuisine,
:description,
:logo

json.rating_arr restaurant.rating_arr

json.reservationUserIds restaurant.reservations.pluck(:user_id).uniq

json.countReview restaurant.reviews.pluck(:user_id).length

if current_user
  json.currentUserLikes !!restaurant.favourites.find_by(user_id: current_user.id)
end