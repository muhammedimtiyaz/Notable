import React from "react";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  getRate() {
    let rating = this.props.review.rating;

    const ratingArr = [];

    for (var idx = 0; idx < rating; idx++) {
      ratingArr.push(
        <i key={idx} class="fa fa-star" aria-hidden="true"></i>
      );
    }

    for (var idx = rating; idx < 5; idx++) {
      ratingArr.push(
        <i key={idx} class="fa fa-star-o" aria-hidden="true"></i>

      );
    }
    return ratingArr;
  }

  deleteReview(id) {
    return e => {
      e.preventDefault();
      this.props.deleteReview(id);
    };
  }

  render() {
    const review = this.props.review;
    let createdAt = review.createdAt.slice(0, 10);
    if (!this.props.currentUser) {
      return (
        <li className="review-li">
          <span className="review-name">{review.user.first_name}</span>
          <span className="rate-icon">{this.getRate()}</span>
          <span>
            <i className="fa fa-share" />
            commented on {createdAt}
          </span>
          <p>{review.comment}</p>
        </li>
      );
    } else {
      return (
        <li className="review-li">
          <span className="review-name">
            {this.props.currentUser.id === review.user.id
              ? "You"
              : review.user.first_name}
          </span>
          <span className="rate-icon">{this.getRate()}</span>
          <span>
            <i className="fa fa-share" />
            commented on {createdAt}
            {this.props.currentUser.id === review.user.id ? (
              <button
                type="button"
                onClick={this.deleteReview(review.id)}
                className="btn btn-demo"
                id="delete-review"
              >
                Delete
              </button>
            ) : (
              ""
            )}
          </span>
          <p>{review.comment}</p>
        </li>
      );
    }
  }
}

export default ReviewIndexItem;