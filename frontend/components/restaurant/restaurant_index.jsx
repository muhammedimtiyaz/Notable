import React from "react";
import SearchFormContainer from "../search/search_form_container";
import RestaurantIndexItem from "./restaurant_index_items";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.index = this.index.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  index() {
    if (this.props.restaurants.length === 0) {
      return (
        <div className="search-error">
          <p>NO SEARCH RESULTS FOUND.</p>
        </div>
      );
    }
    return this.props.restaurants.map((restaurant, i) => {
      return (
        <RestaurantIndexItem key={i} restaurant={restaurant} />
      );
    });
  }

  render() {
    return (
      <div id="main-body">
        <section className="restaurant-list-image-container">
        </section>
        <section className="restaurant-content">
          <div className="search-container">
            <SearchFormContainer />
          </div>
          <ul className="restaurant-items">
            {this.index()}
          </ul>
        </section>
      </div>
    );
  }
}


export default RestaurantIndex;