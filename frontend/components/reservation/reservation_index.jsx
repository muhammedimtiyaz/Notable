import React from "react";
import ReservationIndexItem from "./reservation_index_item";

class ReservationIndex extends  React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = Object.keys(this.props.reservations).map((i) => (
      <ReservationIndexItem key={i} reservation={this.props.reservations[i]} />
    ));

    return(
      <div className="reservation-index">
        <h1>Reservations</h1>
        {items}
      </div>
    );
  }
}
export default ReservationIndex;