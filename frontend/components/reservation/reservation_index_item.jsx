import React from "react";

class ReservationIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reservation-index-item">
        <h2>Date: {this.props.reservation.date}</h2>
        <h2>Time: {this.props.reservation.time}:00</h2>
        <h2>Table for {this.props.reservation.seats}</h2>
      </div>
    );
  }
}
export default ReservationIndexItem;