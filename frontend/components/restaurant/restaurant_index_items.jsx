import React from "react";
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.getStar = this.getStar.bind(this);
  }

  getStar() {
    let starCount = this.props.restaurant.star;
    const stars = [];
    for (let idx = 0; idx < starCount; idx++) {
      stars.push(
        <i key={idx} className="fa fa-star" aria-hidden="true"></i>
      );
    }
    return stars;
  }

  render() {
    debugger
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
              <span className="restaurant-star">{this.getStar()}</span>
            </li>
            <li>Rating: {averageRating}</li>
            <li>Cuisine: {this.props.restaurant.cuisine}</li>
            <li>Address: {this.props.restaurant.address}, {this.props.restaurant.city}, {this.props.restaurant.state}, {this.props.restaurant.zipcode}</li>
            <li>Contact: {this.props.restaurant.phoneNumber}</li>
          </ul>
        </li>
      </Link>
    );
  }
}

export default RestaurantIndexItem;