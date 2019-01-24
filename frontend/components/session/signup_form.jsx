import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      re_enter: "",
      primary_location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(this.props.closeModal);
  }

  // () => this.props.history.push("/")

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render () {
    return (
      <div id="signup" className="modal">
        <div className="modal-signup-form">
        <h2>Welcome to OpenTable!</h2>
        <span className="close" onClick={this.props.closeModal}>&times;</span>
        <br/>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input 
            className="signup-input"
            type="text"
            placeholder="First Name *"
            value={this.state.firstname}
            onChange={this.handleInput('firstname')}
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Last Name *"
            value={this.state.lastname}
            onChange={this.handleInput('lastname')}
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Username *"
            value={this.state.username}
            onChange={this.handleInput('username')}
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Enter email *"
            value={this.state.email}
            onChange={this.handleInput('email')}
            />
          <input 
            className="signup-input"
            type="password"
            placeholder="Enter Password *"
            value={this.state.password}
            onChange={this.handleInput('password')}
            />
          <input 
            className="signup-input"
            type="password"
            placeholder="Re-enter password *"
            value={this.state.re_enter}
            onChange={this.handleInput('re_enter')}
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Primary Dining Location *"
            value={this.state.primary_location}
            onChange={this.handleInput('primary_location')}
            />
            <button className="signup-button" onClick={() => this.props.removeErrors()}>Create Account</button>
            <p>Don't want to complete the form?</p>
            <div className="facebook-google-button-div">
              <a href="https://www.facebook.com/" className="facebook-google-btn"><i className="fab fa-facebook-f"></i>Continue with Facebook</a>
            </div>
            <div className="facebook-google-button-div">
              <a href="https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F%3Fgws_rd%3Dssl&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="facebook-google-connect-button"><i className="fab fa-google"></i>Continue with Google</a>
            </div>
        </form>
      </div>
    </div>
    );
  }
};

export default Signup;