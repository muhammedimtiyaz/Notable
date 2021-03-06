import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestRestaurantReviews(this.props.restaurantId);
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.reviews.length !== this.props.reviews.length) {
      this.props.requestRestaurantReviews(this.props.restaurantId);
    }
  }

  render() {
    if (Object.keys(this.props.reviews).length === 0) { return null; }
    const allReviews = Object.values(this.props.reviews).map((review, i) => (
      <ReviewIndexItem 
        key={review.id} 
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