import React from "react";
import { Link } from "react-router-dom";

const FeaturedPhotos = () => {
  return (
    <div className="featured-areas">
      <h2 className="featured-areas-header">Featured Areas</h2>
      <div className="featured-areas-photo-div">
        <div className="featured-area-photo">
          <h3 className="featured-city">New York Area</h3>
          <h4>31,793 restaurants</h4>
          <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-new-york-city.jpg" alt="New York Area"/></Link>
        </div>
        <div className="featured-area-photo">
          <h3 className="featured-city">Chicago</h3>
          <h4>10,730 restaurants</h4>
          <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-chicago.jpg" alt="Chicago"/></Link>
        </div>
        <div className="featured-area-photo">
          <h3 className="featured-city">Los Angeles</h3>
          <h4>10,705 restaurants</h4>
          <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-los-angeles.jpg" alt="Los Angeles"/></Link>
        </div>
        <div className="featured-area-photo">
          <h3 className="featured-city">San Francisco</h3>
          <h4>8,743 restaurants</h4>
          <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-san-francisco.jpg" alt="San Francisco"/></Link>
        </div>
        <div className="featured-area-photo">
          <h3 className="featured-city">Miami</h3>
          <h4>6,339 restaurants</h4>
          <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-miami.jpg" alt="Miami"/></Link>
        </div>
        <div className="featured-area-photo">
          <h3 className="featured-city">Las Vegas</h3>
          <h4>2,275 restaurants</h4>
          <Link to="/city"><img src="//components.otstatic.com/components/oc-featured-metros/1.1.3/assets/img/metros/us-las-vegas.jpg" alt="Las Vegas"/></Link>
        </div>
        <div className="featured-locations-container">
          <div className="featured-locations">
            <ul>
              <Link to={`/city`}><li>Atlanta</li></Link>
              <Link to={`/city`}><li>Chicago</li></Link>
              <Link to={`/city`}><li>Dallas</li></Link>
              <Link to={`/city`}><li>Denver</li></Link>
              <Link to={`/city`}><li>Detroit</li></Link>
              <Link to={`/city`}><li>Houston</li></Link>
              <Link to={`/city`}><li>Indiana</li></Link>
              <Link to={`/city`}><li>Las Vegas</li></Link>
              <Link to={`/city`}><li>Los Angeles</li></Link>
              <Link to={`/city`}><li>Miami</li></Link>
              <Link to={`/city`}><li>Milwaukee</li></Link>
              <Link to={`/city`}><li>New England</li></Link>
              <Link to={`/city`}><li>New York Area</li></Link>
              <Link to={`/city`}><li>Orlando</li></Link>
              <Link to={`/city`}><li>Philadelphia</li></Link>
              <Link to={`/city`}><li>Portland</li></Link>
              <Link to={`/city`}><li>Richmond</li></Link>
              <Link to={`/city`}><li>San Francisco</li></Link>
              <Link to={`/city`}><li>Seattle</li></Link>
              <Link to={`/city`}><li>Washington DC</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPhotos;