import React from 'react';
import SearchFormContainer from '../search/search_form_container';
import FeaturedAreasContainer from '../featured_areas/featured_areas_container';
import SliderContainer from '../slider/slider_container';
import Footer from "../footer/footer";
import { Link } from 'react-router-dom';


const Homepage =  () => (
  <section id="main-body">
    <section className="hero-img-container">
    </section>

    <section className="content">
      <div className="search-container">
        <SearchFormContainer />
      </div>
      <div className="cuisines">
        <h3>Top Cuisines</h3>
        <SliderContainer />
      </div>
      <FeaturedAreasContainer />
    </section>

    <section className="section-footer">
      <h4>Restaurateurs Join Us</h4>
      <p>Join the more than 40,000 restaurants which fill seats and</p>
      <p>manage reservations with NoTable.</p>
      <Link
        to="/restaurants/new"
        className="btn-demo"
        id="addRestaurant">
        Learn More
      </Link>
    </section>
    <section className="contact">
      <Footer />
    </section>
  </section>
);

export default Homepage;