import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";

class LinkSlider extends React.Component {
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

    let cuisine = e.currentTarget.id;

    clearTimeout(this.timer);
    const that = this;
    this.timer = setTimeout(function() {
      that.setState({
        searchTerm: cuisine
      }, () => (
        that.props.searchRestaurants(that.state.searchTerm)
        .then(() => that.props.closeModal()
        ).then(() =>
          that.setState({
            searchTerm: ''
          })
        ).then(() => that.props.history.push("/restaurants"))
      ));
    }, 800)
  }


  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    };
    return (
      <Slider className="slider-container cuisine-slide" {...settings}>

        <div
          className="slider one"
          id="american"
          onClick={this.handleClick}>
          <p>Best American</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider two"
          id="italian"
          onClick={this.handleClick}>
          <p>Best Italian</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider three"
          id="steakhouse"
          onClick={this.handleClick}>
          <p>Best Steakhouse</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider four"
          id="contemporary"
          onClick={this.handleClick}>
          <p>Best Contemporary</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider five"
          id="seafood"
          onClick={this.handleClick}>
          <p>Best Seafood</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider six"
          id="japanese"
          onClick={this.handleClick}>
          <p>Best Japanese</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider seven"
          id="Chinese"
          onClick={this.handleClick}>
          <p>Best Chinese</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider eight"
          id="tapas"
          onClick={this.handleClick}>
          <p>Best Tapas/Small Plates</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider nine"
          id="asian"
          onClick={this.handleClick}>
          <p>Best Asian</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider ten"
          id="mediterranean"
          onClick={this.handleClick}>
          <p>Best Mediterranean</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider eleven"
          id="lebanese"
          onClick={this.handleClick}>
          <p>Best Lebanese</p>
          <p>Restaurants Around You</p>
        </div>

        <div
          className="slider twelve"
          id="pan-asian"
          onClick={this.handleClick}>
          <p>Best Pan-Asian</p>
          <p>Restaurants Around You</p>
        </div>

      </Slider>
    );
  }
}

export default withRouter(LinkSlider);