import React from 'react';
import { Route, withRouter } from 'react-router-dom';
// import ReservationFormContainer from '../reservation/reservation_form_container';
// import ReviewFormContainer from '../review/review_form_container';
// import ReviewIndexContainer from '../review/review_index_container';
import LoadingSpinner from "../loading_spinner";


class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToElement = this.scrollToElement.bind(this);
    // this.reviewFromChecker = this.reviewFromChecker.bind(this);

    this.getAveRating = this.getAveRating.bind(this);
    this.deleteFavourite = this.deleteFavourite.bind(this);
    this.createFavourite = this.createFavourite.bind(this);

  }


  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  scrollToElement(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  reservationFormChecker() {
    if(this.props.currentUser) {
      return (
        <Route
          path={`/restaurants/:restaurantId`}
          component={ReservationFormContainer}/>
      );
    } else {
      return (
        <div>
          <Route
            path={`/restaurants/:restaurantId`}
            component={ReservationFormContainer}/>
        </div>
      );
    }
  }


  reviewFromChecker() {
    if (this.props.loading) return <LoadingSpinner/>;

    if(!this.props.currentUser) { return null; }

    const reservationUserIds = this.props.restaurant.reservationUserIds;
    const currentUser = this.props.currentUser;
    if(reservationUserIds.includes(currentUser.id)) {
      return (
        <Route path={'/restaurants/:restaurantId'}
            component={ReviewFormContainer} />
      );
    } else {
      return (
        <div className="review-form-container review-form-message">
          <p>Reviews can only be made by diners who have eaten at this restaurant</p>
        </div>
      );
    }
  }

  favouriteChecker() {
    if(!this.props.currentUser) { return null; }
    const restaurant = this.props.restaurant;
    if(restaurant.currentUserLikes){
      return (
        <div
          onClick={this.deleteFavourite(restaurant.id)}
          className="favourite-btn favourite-active">
          <i className="far fa-bookmark"></i>
          Restaurant saved!
        </div>
      );
    } else {
      return (
        <div
          onClick={this.createFavourite(restaurant.id)}
          className="favourite-btn">
          <i className="far fa-bookmark"></i>
          Save this restaurant
        </div>
      );
    }
  }



  deleteFavourite(id){
    return (e) => {
     e.preventDefault();
     this.props.deleteFavourite(id);
    };
  }

  createFavourite(){
    return (e) => {
     e.preventDefault();
     this.props.createFavourite(this.props.restaurant.id);
    };
  }



  getStar() {
    let starCount = this.props.restaurant.star;
    const stars = [];

    for (let idx = 0; idx < starCount; idx++) {
      stars.push(
        <i key={idx} class="fa fa-star" aria-hidden="true"></i>
      );
    }
    return stars;
  }

  getAveRating(){
    const restaurant = this.props.restaurant;
    let sum = 0;
    for (var i = 0; i < restaurant.ratingArr.length; i++) {
      sum += restaurant.ratingArr[i];
    }

    let aveRating;
    if (sum === 0) {
      aveRating = "No rating yet!";
    } else {
      aveRating = (Math.round(sum / restaurant.ratingArr.length * 10) / 10).toFixed(1);
    }

    return aveRating;
  }

  getRate() {
    const restaurant = this.props.restaurant;
    let sum = 0;
    for (var i = 0; i < restaurant.ratingArr.length; i++) {
      sum += restaurant.ratingArr[i];
    }

    let aveRating;
    if (sum === 0) {
      aveRating = 0;
    } else {
      aveRating = Math.floor((sum / restaurant.ratingArr.length * 10) / 10);
    }

    const rateArr = [];

    for (var idx = 0; idx < aveRating; idx++) {
      rateArr.push (
        <i key={idx} class="fa fa-star" aria-hidden="true"></i>
      );
    }

    for (var idx = aveRating; idx < 5 ; idx++) {
      rateArr.push (
        <i key={idx} class="fa fa-star-o" aria-hidden="true"></i>
      );
    }
    return rateArr;
  }


  render() {
    if (this.props.loading) return <LoadingSpinner/>;

    if (!this.props.restaurant) return null;
    const restaurant = this.props.restaurant;

    return (
      <div className='restaurant-showpage'>
        <div className='restaurant-showpage-header'>
            <img
              className='showpage-header-img'
              src={window.showpageHeroImage} />
        </div>
        <div className="restaurant-main-container">
          <div className='restaurant-main-left'>
            <nav className='nav-link-wrapper'>
              <a className='page-nav-link' onClick={() => this.scrollTo(this.aboutSection)}>About</a>
              <a className='page-nav-link' onClick={() => this.scrollTo(this.reviewsSection)}>Reviews</a>
              <a className='page-nav-link' onClick={() => this.scrollTo(this.writeReviewsSection)}>Write a Review</a>
            </nav>

            <section className='restaurant-nav-info'>
              <div className='restaurant-nav-name'>
                <h1>{restaurant.name}</h1>
                <span className="restaurant-star">{this.getStar()}</span>
              </div>
              <div className='restaurant-nav-detail'>
                <span>{this.getRate()}</span>
                <div className='rating_icon'>{this.getAveRating()}</div>
                <div><i className="fa fa-comment"></i>{restaurant.countReview} reviews</div>
                <div><i className="fas fa-utensils"></i>{restaurant.cuisine} </div>
              </div>
            </section>



            <div className='restaurant-showpage-main'>
              <div ref={ el => { this.aboutSection = el;} } className='restaurant-content-about' id='about'>
                    <p className="restaurant-description">{restaurant.description}</p>
                    <p>Cusines: {restaurant.cuisine}</p>
                    <p>Phone number: {restaurant.phoneNumber}</p>
                    <p>Hours of operation: {restaurant.openTime} - {restaurant.closeTime}</p>
                    <p>Address: {restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zipcode}</p>
              </div>

              <div
                ref={ el => { this.reviewsSection = el;} }
                className='restaurant-reviews'
                name='reviews'>
                  <h5>What {this.props.restaurant.ratingArr.length} People Are Saying</h5>
                  <Route path={'/restaurants/:restaurantId'}
                    component={ReviewIndexContainer} />
              </div>

              <div
                ref={ el => { this.writeReviewsSection = el;} }
                className='restaurant-reviews'
                name='writeReviews'>
                {this.reviewFromChecker()}
              </div>

            </div>
          </div>
          <aside className="restaurant-main-right">
            <div
              name='reservation'
              className='restaurant-reservation'>
                {this.reservationFormChecker()}
            </div>

            {this.favouriteChecker()}
          </aside>
        </div>
      </div>
    );
  }
}

export default withRouter(RestaurantDetail);