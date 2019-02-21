import React from "react";
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sum = 0;
    for (let i = 0; i < this.props.restaurant.rating_arr.length; i++) {
      sum += this.props.restaurant.rating_arr[i];
    }

    let averageRating;
    if (sum === 0) {
      averageRating = 'No Ratings Yet!';
    } else {
      averageRating = (Math.round(sum / this.props.restaurant.rating_arr.length * 10) / 10).toFixed(1);
    }

    return (
      <Link to={`/restaurants/${this.props.restaurant.id}`}>
        <li className="restaurant-list-container">
          <div className="restaurant-logo-container">
            <img
              className="restaurant-logo"
              src={this.props.restaurant.logo}/>
          </div>
          <ul className="restaurant-detail-ul">
            <li className="restaurant-name">
              <h5>{this.props.restaurant.name}</h5>
            </li>
            <li>Rating: {averageRating}</li>
            <li>Cuisine: {this.props.restaurant.cuisine}</li>
            <li>Address: {this.props.restaurant.address}, {this.props.restaurant.city}, {this.props.restaurant.state}, {this.props.restaurant.zipcode}</li>
            <li>Contact: {this.props.restaurant.phone_number}</li>
          </ul>
        </li>
      </Link>
    );
  }
}

export default RestaurantIndexItem;