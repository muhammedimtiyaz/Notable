// import React from "react";
// import { Link } from "react-router-dom";

// const FeaturedPhotos = () => {
//   return (
//     <div className="featured-areas">
//       <h2 className="featured-areas-header">Featured Areas</h2>
//       <div className="featured-areas-photo-div">
//         <div className="featured-area-photo">
//           <h3 className="featured-city">New York Area</h3>
//           <h4>31,793 restaurants</h4>
//           <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-new-york-city.jpg" alt="New York Area"/></Link>
//         </div>
//         <div className="featured-area-photo">
//           <h3 className="featured-city">Chicago</h3>
//           <h4>10,730 restaurants</h4>
//           <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-chicago.jpg" alt="Chicago"/></Link>
//         </div>
//         <div className="featured-area-photo">
//           <h3 className="featured-city">Los Angeles</h3>
//           <h4>10,705 restaurants</h4>
//           <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-los-angeles.jpg" alt="Los Angeles"/></Link>
//         </div>
//         <div className="featured-area-photo">
//           <h3 className="featured-city">San Francisco</h3>
//           <h4>8,743 restaurants</h4>
//           <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-san-francisco.jpg" alt="San Francisco"/></Link>
//         </div>
//         <div className="featured-area-photo">
//           <h3 className="featured-city">Miami</h3>
//           <h4>6,339 restaurants</h4>
//           <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-miami.jpg" alt="Miami"/></Link>
//         </div>
//         <div className="featured-area-photo">
//           <h3 className="featured-city">Las Vegas</h3>
//           <h4>2,275 restaurants</h4>
//           <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-las-vegas.jpg" alt="Las Vegas"/></Link>
//         </div>
//         <div className="featured-locations-container">
//           <div className="featured-locations">
//             <ul>
//               <Link to={`/city`}><li>Atlanta</li></Link>
//               <Link to={`/city`}><li>Chicago</li></Link>
//               <Link to={`/city`}><li>Dallas</li></Link>
//               <Link to={`/city`}><li>Denver</li></Link>
//               <Link to={`/city`}><li>Detroit</li></Link>
//               <Link to={`/city`}><li>Houston</li></Link>
//               <Link to={`/city`}><li>Indiana</li></Link>
//               <Link to={`/city`}><li>Las Vegas</li></Link>
//               <Link to={`/city`}><li>Los Angeles</li></Link>
//               <Link to={`/city`}><li>Miami</li></Link>
//               <Link to={`/city`}><li>Milwaukee</li></Link>
//               <Link to={`/city`}><li>New England</li></Link>
//               <Link to={`/city`}><li>New York Area</li></Link>
//               <Link to={`/city`}><li>Orlando</li></Link>
//               <Link to={`/city`}><li>Philadelphia</li></Link>
//               <Link to={`/city`}><li>Portland</li></Link>
//               <Link to={`/city`}><li>Richmond</li></Link>
//               <Link to={`/city`}><li>San Francisco</li></Link>
//               <Link to={`/city`}><li>Seattle</li></Link>
//               <Link to={`/city`}><li>Washington DC</li></Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FeaturedPhotos;









import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class FeaturedAreas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.openModal("loading");

    let cityName = e.target.id;
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
        ).then(() =>
          that.setState({
            searchTerm: ''
          })
        ).then(() => that.props.history.push("/restaurants"))
      ));
    }, 300)

  }


  render() {
    return (
      <div className="cities">
        <h3>Featured Areas</h3>
        <div className="city-list">
          <div
            className="city-col"
            id="new_york"
            onClick={this.handleClick}>
            New York
              <h4>31,793 restaurants</h4>
          </div>
          <div
            className="city-col"
            id="los_angeles"
            onClick={this.handleClick}>
            Los Angeles
              <h4>10,705 restaurants</h4>
          </div>

          <div
            className="city-col"
            id="chicago"
            onClick={this.handleClick}>
            Chicago
              <h4>10,730 restaurants</h4>
          </div>
          <div
            className="city-col"
            id="san_francisco"
            onClick={this.handleClick}>
            San Francisco
              <h4>8,743 restaurants</h4>
          </div>
          <div
            className="city-col"
            id="washington"
            onClick={this.handleClick}>
            Washington DC
              <h4>4,733 restaurants</h4>
          </div>
          <div
            className="city-col"
            id="seattle"
            onClick={this.handleClick}>
            Seattle
              <h4>6,299 restaurants</h4>
          </div>
        </div>
        <div className="featured-locations-container">
          <div className="featured-locations">
            <ul>
              <Link to={`/restaurants`}><li>Atlanta</li></Link>
              <Link to={`/restaurants`}><li>Chicago</li></Link>
              <Link to={`/restaurants`}><li>Dallas</li></Link>
              <Link to={`/restaurants`}><li>Denver</li></Link>
              <Link to={`/restaurants`}><li>Detroit</li></Link>
              <Link to={`/restaurants`}><li>Houston</li></Link>
              <Link to={`/restaurants`}><li>Indiana</li></Link>
              <Link to={`/restaurants`}><li>Las Vegas</li></Link>
              <Link to={`/restaurants`}><li>Los Angeles</li></Link>
              <Link to={`/restaurants`}><li>Miami</li></Link>
              <Link to={`/restaurants`}><li>Milwaukee</li></Link>
              <Link to={`/restaurants`}><li>New England</li></Link>
              <Link to={`/restaurants`}><li>New York Area</li></Link>
              <Link to={`/restaurants`}><li>Orlando</li></Link>
              <Link to={`/restaurants`}><li>Philadelphia</li></Link>
              <Link to={`/restaurants`}><li>Portland</li></Link>
              <Link to={`/restaurants`}><li>Richmond</li></Link>
              <Link to={`/restaurants`}><li>San Francisco</li></Link>
              <Link to={`/restaurants`}><li>Seattle</li></Link>
              <Link to={`/restaurants`}><li>Washington DC</li></Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FeaturedAreas);