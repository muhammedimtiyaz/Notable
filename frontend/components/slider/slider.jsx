import React from "react";
import { Link } from "react-router-dom";
// import Slider from "react-slick";

class LinkSlider extends React.Component {
  render () {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 4
    // };
    return (
      // <Slider {...settings}>
        <div className="slide-container">
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best American Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/8AFC7ADC-DE3B-439D-91F2-CE568C1A653B.jpg" alt="American" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Italian Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/48E9D049-40CF-4CB9-98D9-8C47D0D58986.jpg" alt="Italian" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Steakhouse Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/029CD931-4A83-4572-B87A-2B0CE7ABCB1E.jpg" alt="Steakhouse" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Contemporary Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/2B0938A7-B430-48B2-BF04-045BBE6C3BB2.jpg" alt="Contemporary" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Seafood Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/0735C10C-6AB6-46F6-87AA-8FE54397744D.jpg" alt="Seafood" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Japanese Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/7BF54B86-BD1F-4E35-BBCA-F7CCE982B4ED.jpg" alt="Japanese" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Chinese Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/6C913B35-FFD3-498C-93F0-A3E7086EBE25.jpg" alt="Chinese" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Tapas/Small Plates Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/5050D255-C8C4-40BD-BF56-5C35108FE9C1.jpg" alt="Tapas/Small Plates" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Asian Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/73289F47-FE6D-4B16-94EA-F24DC1FDFC26.jpg" alt="Asian" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Mediterranean Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/71C5B1FC-DC2A-4DFF-BF31-F4E7B8E956A0.jpg" alt="Mediterranean" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Lebanese Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/3E5CDB19-550F-47FB-8AFD-E68C24460F31.jpg" alt="Lebanese" /></Link>
          </div>
          <div className="featured-cuisine-photo">
            <h3 className="featured-cuisines">Best Pan-Asian Restaurants Around You</h3>
            <Link to={`/restaurants`}><img className="food-photo" src="//cdn.otstatic.com/start-page-rush-654/4822ABB0-DF77-4D30-8C47-74809DDBAECB.jpg" alt="Pan-Asian" /></Link>
          </div>
        </div>
      // </Slider>
    );
  }
}

export default LinkSlider;




// import React from "react";
// import Slider from "react-slick";

// import { withRouter } from 'react-router-dom';

// class LinkSlider extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerms: ''
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.props.openModal("loading");

//     let cuisine = e.currentTarget.id;


//     clearTimeout(this.timer);
//     const that = this;
//     this.timer = setTimeout(function() {

//       that.setState({
//         searchTerms: cuisine
//       }, () => (
//         that.props.searchRestaurants(that.state.searchTerms)
//         .then(() => that.props.closeModal()
//         ).then(() =>
//           that.setState({
//             searchTerms: ''
//           })
//         ).then(() => that.props.history.push("/restaurants"))
//       ));
//     }, 800)
//   }



//  render() {
//    var settings = {
//      dots: true,
//      infinite: true,
//      speed: 2000,
//      autoplay: true,
//      autoplaySpeed: 8000,
//      slidesToShow: 4,
//      slidesToScroll: 4,
//      responsive: [
//        {
//          breakpoint: 920,
//          settings: {
//            slidesToShow: 2,
//            slidesToScroll: 1,
//          }
//        },
//       {
//         breakpoint: 1320,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1
//         }
//       }
//     ]
//    };
//    return (
//      <Slider className="slider-container cuisine-slide" {...settings}>

//        <div
//         className="slider one"
//         id="american"
//         onClick={this.handleClick}>
//         <p>Best American</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider two"
//         id="italian"
//         onClick={this.handleClick}>
//         <p>Best Italian</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider three"
//         id="steakhouse"
//         onClick={this.handleClick}>
//         <p>Best Steakhouse</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider four"
//         id="contemporary"
//         onClick={this.handleClick}>
//         <p>Best Contemporary</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider five"
//         id="seafood"
//         onClick={this.handleClick}>
//         <p>Best Seafood</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider six"
//         id="japanese"
//         onClick={this.handleClick}>
//         <p>Best Japanese</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider seven"
//         id="Chinese"
//         onClick={this.handleClick}>
//         <p>Best Chinese</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider eight"
//         id="tapas"
//         onClick={this.handleClick}>
//         <p>Best Tapas/Small Plates</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider nine"
//         id="asian"
//         onClick={this.handleClick}>
//         <p>Best Asian</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider ten"
//         id="mediterranean"
//         onClick={this.handleClick}>
//         <p>Best Mediterranean</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider eleven"
//         id="lebanese"
//         onClick={this.handleClick}>
//         <p>Best Lebanese</p>
//         <p>Restaurants Around You</p>
//        </div>

//        <div
//         className="slider twelve"
//         id="pan-asian"
//         onClick={this.handleClick}>
//         <p>Best Pan-Asian</p>
//         <p>Restaurants Around You</p>
//        </div>

//      </Slider>
//    );
//  }
// }

// export default withRouter(LinkSlider);