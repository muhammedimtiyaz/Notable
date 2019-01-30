import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestRestaurantReviews(this.props.restaurantId);
  }

  render() {
    if (this.props.reviews.length === 0) { return null; }
    const allReviews = this.props.reviews.map((review, i) => (
      <ReviewIndexItem 
        key={i} 
        review={review}
        currentUser={this.props.currentUser}
        deleteReview={this.props.deleteReview} />
    ));

    return(
      <ul className="review-ul">
        {allReviews}
      </ul>
    );
  }
}

export default ReviewIndex;