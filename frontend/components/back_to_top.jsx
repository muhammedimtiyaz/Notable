import React from "react";

class BackToTop extends React.Component {
  scrollToTop () {
    const topOfPage = document.getElementById("top-of-page");
    topOfPage.scrollIntoView({ behaviour: "smooth" });
  }

  render () {
    return (
      <button onClick={this.scrollToTop} id="backToTop">Back to Top</button>
    );
  }
}

export default BackToTop;