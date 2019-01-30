import React from "react";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      restaurant_id: this.props.match.params.restaurantId,
      seats: 1,
      time: "12:00",
      date: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.timePicker = this.timePicker.bind(this);
    this.seatsPicker = this.seatsPicker.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.Target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.currentUser) {
      this.setState({user_id: this.props.currentUser.id});
    }

    this.props.createReservation(this.state).then(() => {
      this.props.removeErrors();
      this.props.history.push(`/users/${this.props.currentUser.id}`);
    });
  }

  renderErrors() {
    return (
      <ul className="error-ul">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  timePicker() {
    let timeSlotsArr = [];
    let openTime = this.props.restaurants[this.state.restaurant_id].openTime;
    openTime = parseInt(openTime.split(":")[0]);
    let closeTime = this.props.restaurants[this.state.restaurant_id].closeTime;
    closeTime = parseInt(closeTime.split(":")[0]);

    for (let i = openTime; i < closeTime; i++) {
      timeSlotsArr.push(i);
    }

    let selectTime = timeSlotsArr.map((time, i) => (
      <option key={i} value={time}>
        {" "}
        {time < 10 ? "0" + time + ":00" : time + ":00"}
      </option>
    ));

    return selectTime;
  }

  seatsPicker() {
    let partySize = [];

    for (let i = 1; i < 21; i++) {
      partySize.push(i);
    }

    let numList = partySize.map((num, i) => (
      <option key={i} value={num}>
        {num === 1 ? num + " person" : num + " people"}
      </option>
    ));

    return numList;
  }

  render() {
    let date = new Date();
    let minDate = date.toISOString().slice(0, 10);
    return (
      <div className="reservation-show">
        <h5>Make a reservation</h5>
        {this.renderErrors()}
        <form>
          <select
            className="reservation-input  input-1"
            onChange={this.update("seats")}
          >
            {this.seatsPicker()}
          </select>

          <select
            className="reservation-input  input-2"
            onChange={this.update("time")}
          >
            {this.timePicker()}
          </select>

          <input
            type="date"
            min={minDate}
            value={this.state.date}
            placeholder="YYYY-MM-DD"
            onChange={this.update("date")}
            className="reservation-input  input-2"
          />

          {this.props.currentUser ? (
            <input
              type="submit"
              onClick={this.handleSubmit}
              value="Book a Table"
              className="submit-button"
              id="reservation-submit"
            />
          ) : (
            <input
              type="submit"
              onClick={this.handleSubmit}
              value="Book a Table"
              className="submit-button"
              disabled="disabled"
              background="grey"
              id="disabled-btn"
            />
          )}

          {this.props.currentUser ? (
            <p className="offer">
              <i className="fas fa-chart-line" /> Booked{" "}
              {parseInt(this.state.restaurant_id.slice(0, 1)) * 3 + 40} times
              today.
            </p>
          ) : (
            <p className="offer need-login">
              Please Log In to make a reservation.
            </p>
          )}
        </form>
      </div>
    );
  }
}

export default ReservationForm;
