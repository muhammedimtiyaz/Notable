

# NoTable

[NoTable Live](https://notable-mi.herokuapp.com/#/)

NoTable is a full-stack web application inspired by OpenTable. The backend is built on Ruby on Rails with a PostgreSQL database and the frontend consists of a React/Redux architecture.
It features restaurants that users can view, book and review. Users can search for restaurants by location, restaurant name, or cuisines through the search bar or by clicking on a specific image on index page. The city image are responsive design.

![index](https://res.cloudinary.com/chengzii/image/upload/v1523652624/starTable_index.jpg)




## Description
### Search
NoTable makes it easy for users to search restaurants to find available reservations. One can search by location, restaurant name, or cuisines.
![index](https://res.cloudinary.com/chengzii/image/upload/v1523658252/starTable_search.jpg)




### Reservations
Reservation form exists inside each restaurant's page. Once user select the time and submit the form, it will hit the database and will be stored in the joint table between users and restaurants with the specific date and time. This allows us to manage and keep track of records. All you favourites restaurants are also listed and can be edited in the profile page.
![index](https://res.cloudinary.com/chengzii/image/upload/v1523658110/starTable_reservation.jpg)




### Rating, Reviews, Favourites
User can favourite one restaurant and find the favourite restaurants list in their profile page.

NoTable users once logged in can write reviews of restaurants they've booked.
Those rating and reviews are made only by registered users. When unauthorised users try to access, they will be encouraged to sign up or will be redirected to homepage by protected routes.

![index](https://res.cloudinary.com/chengzii/image/upload/v1523658106/starTable_comment.jpg)

To get hover star in the review
```JS  
 updateRating(updatedRating){
    return (e) => this.setState({rating: updatedRating});
  }
  handleHover(i){
   return () => this.setState({hover: true, hoverV: i});
  }

   handleHoverLeave(){
     this.setState({hover: false});
  }  

  ratingStars(){
    let starArr = [];

    for (let i = 1; i < 6; i++) {
      let id, maxRating;
      maxRating = this.state.hover ? this.state.hoverV: this.state.rating;
      if (i <= maxRating) id ="full";

      starArr.push(
        <i
          key={i}
          className="fa fa-star"
          id={id}
          onMouseEnter={this.handleHover(i)}
          onMouseLeave={this.handleHoverLeave}
          aria-hidden="true"
          onClick={this.updateRating(i)}>
        </i>);
    }

    return starArr;
  }

```




### Features
- User Authentication
- Login/signup forms displayed in modal windows
- Homes index and show pages
- Search pages using search bar
- Make reservations for restaurants
- View all future reservation and past reservation on user profile page
- Write reviews on restaurant
- Favourite restaurant


### Frameworks, Libraries, Gems and Services
- Rails
- React
- Redux
- jQuery
- Jbuilder
- BCrypt



### Furture additions
- Maps: Restaurant show page has interactive map for restaurant
- Image upload: Restaurant profile picture upload


### Additional Resources
- [Database Schema](https://github.com/muhammedimtiyaz/Notable/wiki/database-schema)
- [Rackend Routes](https://github.com/muhammedimtiyaz/Notable/wiki/backend-routes)
- [Sample Redux State](https://github.com/muhammedimtiyaz/Notable/wiki/sample-state)
