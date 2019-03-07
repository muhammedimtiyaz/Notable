import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class FeaturedAreas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.location.search ? this.props.location.search.substr(1) : "",
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.openModal("loading");

    let cityName = e.currentTarget.id;
    if(cityName.includes('_')) {
      cityName = cityName.split("_").join(" ");
    }

    clearTimeout(this.timer);
    const that = this;
    this.timer = setTimeout(function() {
      that.setState({
        searchTerm: cityName
      }, () => (
        that.props.searchRestaurants(that.state.searchTerm)
        .then(() => that.props.closeModal()
        ).then(() => that.props.history.push(`/restaurants?${that.state.searchTerm}`))
      ));
    }, 500)

  }


  render() {
    return (
      <div className="cities">
        <h3>Featured Areas</h3>
        <div className="city-list">
          <div
            className="city-col new_york"
            id="new_york"
            onClick={this.handleClick}>
            New York
              {/* <h4>31,793 restaurants</h4> */}
          </div>
          <div
            className="city-col los_angeles"
            id="los_angeles"
            onClick={this.handleClick}>
            Los Angeles
              {/* <h4>10,705 restaurants</h4> */}
          </div>

          <div
            className="city-col chicago"
            id="chicago"
            onClick={this.handleClick}>
            Chicago
              {/* <h4>10,730 restaurants</h4> */}
          </div>
          <div
            className="city-col san_francisco"
            id="san_francisco"
            onClick={this.handleClick}>
            San Francisco
              {/* <h4>8,743 restaurants</h4> */}
          </div>
          <div
            className="city-col washington"
            id="washington"
            onClick={this.handleClick}>
            Washington DC
              {/* <h4>4,733 restaurants</h4> */}
          </div>
          <div
            className="city-col seattle"
            id="seattle"
            onClick={this.handleClick}>
            Seattle
              {/* <h4>6,299 restaurants</h4> */}
          </div>
        </div>
        <div className="featured-locations-container">
          <div className="featured-locations">
            <ul>
              <li id="atlanta" onClick={this.handleClick}>Atlanta</li>
              <li id="chicago" onClick={this.handleClick}>Chicago</li>
              <li id="dallas" onClick={this.handleClick}>Dallas</li>
              <li id="denver" onClick={this.handleClick}>Denver</li>
              <li id="detroit" onClick={this.handleClick}>Detroit</li>
              <li id="houston" onClick={this.handleClick}>Houston</li>
              <li id="indiana" onClick={this.handleClick}>Indiana</li>
              <li id="las_vegas" onClick={this.handleClick}>Las Vegas</li>
              <li id="los_angeles" onClick={this.handleClick}>Los Angeles</li>
              <li id="miami" onClick={this.handleClick}>Miami</li>
              <li id="milwaukee" onClick={this.handleClick}>Milwaukee</li>
              <li id="new_england" onClick={this.handleClick}>New England</li>
              <li id="new_york" onClick={this.handleClick}>New York Area</li>
              <li id="orlando" onClick={this.handleClick}>Orlando</li>
              <li id="philadelphia" onClick={this.handleClick}>Philadelphia</li>
              <li id="portland" onClick={this.handleClick}>Portland</li>
              <li id="richmond" onClick={this.handleClick}>Richmond</li>
              <li id="san_francisco" onClick={this.handleClick}>San Francisco</li>
              <li id="seattle" onClick={this.handleClick}>Seattle</li>
              <li id="washington" onClick={this.handleClick}>Washington DC</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FeaturedAreas);