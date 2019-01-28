import React from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";
import Footer from "../footer/footer";
import FeaturedAreas from "../featured_areas/featured_areas";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    }
  }

  onSearch(e) {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  }

  handleKeyStoke(e) {
    if (e.key === 'Enter') {
      this.props.history.push(`/city?query=${this.state.searchTerm}`);
    }
  }

  render() {
    return (
      <div className="homepage-container">
        <div className="homepage-banner-container">
          <img className="homepage-banner" src="//media.otstatic.com/img/start_hero_images/us-hero-1440-df9ac0cb6386da688dbb4b0a39d358d5.jpg" alt="homepage-background-image"/>
        </div>
        <div className="searchbar-container">
          <div className="searchbar-header">
            <h1 className="searchbar-title">Find your table for any occasion</h1>
            <input
              type="text"/>
              placeholder=""

          </div>
        </div>
      </div>
    );
  }
}