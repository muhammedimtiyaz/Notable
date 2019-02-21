import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToElement = this.scrollToElement.bind(this);
    this.upcomingReservations = this.upcomingReservations.bind(this);
    this.passedReservations = this.passedReservations.bind(this);
    this.favouriteRestaurants = this.favouriteRestaurants.bind(this);
    this.deleteReservation = this.deleteReservation.bind(this);
  }


  componentDidMount() {
    this.props.requestUserReservations(this.props.currentUser.id);
    this.props.requestUserFavourites(this.props.currentUser.id);
  }

  deleteReservation(id){
    return (e) => {
      e.preventDefault();
      this.props.deleteReservation(id);
    };
  }


  scrollToElement(el) {
    return () => {
      el.scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
    };
  }

  getUpcomingCount() {
    const upcomingReservationCount = [];
    const today = new Date().toJSON();

    const allReservations = Object.values(this.props.reservations);
    allReservations.forEach((reservation) => {
      if(Date.parse(today.slice(0, 10)) <= Date.parse(reservation.date)) {
        upcomingReservationCount.push(reservation);
      }
    });

    return upcomingReservationCount.length;
  }

  getPastCount() {
    const pastReservationCount = [];
    const today = new Date().toJSON();

    const allReservations = Object.values(this.props.reservations);
    allReservations.forEach((reservation) => {
      if(Date.parse(today.slice(0, 10)) > Date.parse(reservation.date)) {
        pastReservationCount.push(reservation);
      }
    });
    return pastReservationCount.length;
  }

  upcomingReservations() {
    const upcoming = [];
    const today = new Date().toJSON();

    const allRes = Object.values(this.props.reservations);
    allRes.forEach((reservation) => {
      if(Date.parse(today.slice(0, 10)) <= Date.parse(reservation.date)) {
        upcoming.push(reservation);
      }
    });

    if(upcoming.length > 0) {
      return(
        <div>
        {upcoming.map((res, idx) =>
          <section key={`upcoming-${idx}`} className="reservation-list">
            <div className="restaurant-logo-container">
              <img
                className="restaurant-logo"
                src={res.restaurant.logo}/>
            </div>
            <div className="restaurant-detail-container">
              <Link
                to={`/restaurants/${res.restaurant.id}`}
                className="restaurant-name">
                  {res.restaurant.name}
              </Link>


              <div className='upcoming-res-date'>
                {res.date}
              </div>
              <div className='upcoming-res-time'>
                {res.time}:00
              </div>
              <div className='upcoming-res-seats'>
                Table for {res.seats} {res.seats === 1 ? "person" : "people"}
              </div>
              <div className='upcoming-res-address'>
              <i className="fas fa-map-marker-alt"></i>
                {res.restaurant.address}, {res.restaurant.city}, {res.restaurant.state} {res.restaurant.zipcode}
              </div>

              <button type="button"
                      onClick={this.deleteReservation(res.id)}
                      className="btn btn-demo reservation-btn">
                      Cancel
              </button>
            </div>
          </section>
        )}
        </div>
      );
    } else {
      return (
        <p className="no-reservation">No upcoming reservations</p>
      );
    }
  }

  passedReservations() {
    const past = [];
    const today = new Date().toJSON();

    const allRes = Object.values(this.props.reservations);
    allRes.forEach((reservation) => {
      if(Date.parse(today.slice(0, 10)) > Date.parse(reservation.date)) {
        past.push(reservation);
      }
    });

    if(past.length > 0) {
      return(
        <div>
        {past.map((res, idx) =>
          <section key={`past-${idx}`} className="reservation-list">
            <div className="restaurant-logo-container">
              <img
                className="restaurant-logo"
                src={res.restaurant.logo}/>
            </div>
            <div className="restaurant-detail-container past-res">
              <Link
                to={`/restaurants/${res.restaurant.id}`}
                className="restaurant-name">
                  {res.restaurant.name}
              </Link>
              <div>
                {res.date}
              </div>
              <div>
                {res.time}:00
              </div>
              <div>
                Table for {res.seats} {res.seats === 1 ? "person" : "people"}
              </div>

              <Link
                to={`/restaurants/${res.restaurant.id}`}
                className="btn review-btn">
                Write Review
              </Link>
              <button type="button"
                      onClick={this.deleteReservation(res.id)}
                      className="reservation-delete-btn">
                      Delete
              </button>
            </div>
          </section>
        )}
        </div>
      );
    } else {
      return (
        <p className="no-reservation">No reservations history</p>
      );
    }
  }



  favouriteRestaurants() {
    let favourites = this.props.favourites;
    if (Object.keys(favourites).length === 0 ) {
      return (
        <p className="no-reservation">No favourites</p>
      );
    } else {
      return(
        <div>
        { Object.values(favourites).map((fav, idx) =>
          <section key={`favourite-${idx}`} className="reservation-list">
            <div className="restaurant-logo-container">
              <img
                className="restaurant-logo"
                src={fav.restaurant.logo}/>
            </div>
            <div className="restaurant-detail-container res-fav">
              <Link
                to={`/restaurants/${fav.restaurant.id}`}
                className="restaurant-name">
                  {fav.restaurant.name}  <i className="fas fa-heart"></i>
              </Link>

              <div className='past-res-date'>
                Stars: {fav.restaurant.star}
              </div>
              <div className='past-res-time'>
                Cuisine: {fav.restaurant.cuisine}
              </div>
              <div className='past-res-time'>
                Contact: {fav.restaurant.phone_number}
              </div>

              <Link
                to={`/restaurants/${fav.restaurant.id}`}
                className="btn btn-demo reservation-btn review-btn">
                Reserve Now
              </Link>

            </div>
          </section>
        )}
        </div>
      );
    }
  }

  render() {
    const user = this.props.currentUser;
    return (
      <section className='user-profile-main'>
        <div className="user-profile">
          <h3>{user.firstName} {user.lastName === "." ? "" : user.lastName}</h3>
        </div>

        <div className='user-profile-body'>
          <aside className='user-profile-side'>
            <div
              className='user-nav-link'
              onClick={this.scrollToElement(this.upcomingSection)}
            >Upcoming Reservations</div>
            <div
              className='user-nav-link'
              onClick={this.scrollToElement(this.pastSection)}
            >Past Reservations</div>
            <div
              className='user-nav-link'
              onClick={this.scrollToElement(this.favouriteSection)}
            >Favourite Restaurants</div>
          </aside>

          <section className='user-profile-content'>
            <div className='user-profile-section'>
              <div className='user-profile-content-title' name='upcoming'
                ref={ el => this.upcomingSection = el }>
                <h2>
                  {this.getUpcomingCount() <= 1 ? "Upcoming Reservation" : "Upcoming Reservations"}
                  <span className="user-reservation-count">
                    {this.getUpcomingCount()}
                  </span>
                </h2>

              </div>
              <div className='user-profile-section-lists' >
                {this.upcomingReservations()}
              </div>
            </div>

            <div className='user-profile-section'>
              <div className='user-profile-content-title' name='past'
                ref={ el => this.pastSection = el }>
                <h2>
                  {this.getPastCount() <= 1 ? "Past Reservation" : "Past Reservations"}
                  <span className="user-reservation-count">{this.getPastCount()}</span>
                </h2>

              </div>
              <div className='user-profile-section-lists' >
                {this.passedReservations()}
              </div>
            </div>


            <div className='user-profile-section'>
              <div className='user-profile-content-title' name='favourite'
                  ref={ el => this.favouriteSection = el }>
                  <h2>Favourite Restaurants
                    <span className="user-reservation-count">
                      {Object.keys(this.props.favourites).length}
                    </span>
                  </h2>

              </div>
              <div className='user-profile-section-lists' >
                {this.favouriteRestaurants()}
              </div>
            </div>

          </section>
        </div>
      </section>
    );
  }

}

export default Profile;