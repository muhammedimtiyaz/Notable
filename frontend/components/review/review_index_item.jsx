import React from "react";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  getRate() {
    let rating = this.props.review.rating;

    const rateArr = [];

    for (var idx = 0; idx < rating; idx++) {
      rateArr.push(
        <img
          key={idx}
          src="https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523511580/rating_icon_full.png"
        />
      );
    }

    for (var idx = rating; idx < 5; idx++) {
      rateArr.push(
        <img
          key={idx}
          src="https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523511580/rating_icon_empty.png"
        />
      );
    }
    return rateArr;
  }

  deleteReview(id) {
    return e => {
      e.preventDefault();
      this.props.deleteReview(id);
    };
  }

  render() {
    const review = this.props.review;
    let createdAt = review.created_at.slice(0, 10);
    if (!this.props.currentUser) {
      return (
        <li className="review-li">
          <span className="review-name">{review.user.firstname}</span>
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
              : review.user.firstname}
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