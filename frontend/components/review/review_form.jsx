import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      restaurant_id: this.props.match.params.restaurantId,
      rating: "",
      comment: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      alert("You must be logged in to leave review");
    } else {
      this.setState({ user_id: this.props.currentUser.id });
    }

    this.props.createReview(this.state).then(() => (this.setState({ 
      user_id: "",
      restaurant_id: this.props.match.params.restaurantId,
      rating: "",
      comment: ""
      })
    ));
  }

  updateRating(rating) {
    return e => this.setState({ rating: rating });
  }

  handleHover(i) {
    return () => this.setState({ hover: true, hoverV: i });
  }

  handleHoverLeave() {
    this.setState({ hover: false });
  }

  ratingStars() {
    let starArr = [];

    for (let idx = 1; idx < 6; idx++) {
      let id, maxRating;
      maxRating = this.state.hover ? this.state.hoverV : this.state.rating;
  
      if (idx <= maxRating) { id = "full"; }
      
      starArr.push(
        <i
          key={idx}
          className="fa fa-star"
          id={id}
          onMouseEnter={this.handleHover(idx)}
          onMouseLeave={this.handleHoverLeave}
          aria-hidden="true"
          onClick={this.updateRating(idx)}>
        </i>
      );
    }

      return starArr;
  }

  renderErrors() {
    if (this.props.errors == []) { return null; }
    return (
      <ul className="error-ul">
        {this.props.errors.map((err, i) => (
          <li key={`error-${i}`}>
            {error}
          </li> 
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="review-form-container">
        {this.renderErrors()}
        <form className="review-form">
          <h5>Write Reviews</h5>
          <div className="rating-stars">
            {this.ratingStars()}
          </div>

          <div className="review-form-middle">
            <textarea 
            className="review-text-input"
            onChange={this.update("comment")}
            value={this.state.comment}
            placeholder="Please leave your feedback."></textarea>
          </div>

          <div className="review-form-button">
            <input
              id="review-submit"
              className="submit-button"
              type="submit"
              onClick={this.handleSubmit}
              value="Submit"
            />
            <br/>
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
