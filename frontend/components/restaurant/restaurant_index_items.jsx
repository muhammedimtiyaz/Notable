import React from "react";
import { Link } from 'react-router-dom';

class RestaurantIndexItems extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.getStar = this.getStar.bind(this);
  }

  getStar() {
    let starCount = this.props.restaurant.star
    const stars = [];
    for (let idx = 0; idx < starCount; idx++) {
      stars.push(
        <i key={idx} class="fa fa-star" aria-hidden="true"></i>
      );
    }
    return stars;
  }

  render() {
    const restaurant = this.props.restaurant;
    let sum = 0;
    for (let i = 0; i < restaurant.ratingArr.length; i++) {
      sum += restaurant.ratingArr[i];
    }

    let averageRating;
    if (sum === 0) {
      averageRating = 'No Ratings'
    } else {
      averageRating = (Math.round(sum / restaurant.ratingArr.length * 10) / 10).toFixed(1);
    }

    return (
      <Link to={`/restaurants/${restaurant.id}`}>
        <li className="restaurant-list-container">
          <div className="restaurant-logo-container">
            <img
              className="restaurant-logo"
              src={restaurant.logo}/>
          </div>
          <ul className="restaurant-detail-ul">
            <li className="restaurant-name">
              <h5>{restaurant.name}</h5>
              <span className="restaurant-star">{this.getStar()}</span>
            </li>
            <li>Rating: {aveRating}</li>
            <li>Cuisine: {restaurant.cuisine}</li>
            <li>Address: {restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.zipcode}</li>
            <li>Contact: {restaurant.phoneNumber}</li>
          </ul>
        </li>
      </Link>
    );
  }
}

export default RestaurantIndexItems;