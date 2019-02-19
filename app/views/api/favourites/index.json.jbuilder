@favourites.each do |favourite|
  json.set! favourite.id do
    json.partial! '/api/favourites/favourite', favourite: favourite
  end
end