import React from "react";
import SearchFormContainer from "../search/search_form_container";
import RestaurantIndexItem from "./restaurant_index_items";

class RestaurantIndex extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      searchTerm: this.props.location.search ? this.props.location.search.substr(1) : "",
    };
    this.indexEl = this.indexEl.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  indexEl() {
    if (this.props.restaurants.length === 0) {
      return (
        <div className="restaurant-search-error">
          <div>NO SEARCH RESULTS FOUND.</div>
          <p>Try checking your spelling or using less specific keywords.</p>
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
      <section id="main-body">
        <section className="restaurantList-img-container">
        </section>
        <section className="content">
          <div className="search-container">
            <SearchFormContainer searchTerm={this.state.searchTerm}/>
          </div>
          <ul className="restaurant-list">
            {this.indexEl()}
          </ul>
        </section>
      </section>
    );
  }
}


export default RestaurantIndex;