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
    this.closeAndRemoveErrors = this.closeAndRemoveErrors.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.re_enter) {
      this.props.receiveSessionErrors( ["Passwords must match"] );
    } else {
      this.props.createNewUser(this.state).then(this.props.closeModal);
    }
  }

  closeAndRemoveErrors(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.removeErrors();
  }

  renderErrors() {
    return(
      <ul className="errors">
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
        <h2>Welcome to NoTable!</h2>
        <span className="close" onClick={this.closeAndRemoveErrors}>&times;</span>
        <hr/>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input 
            className="signup-input"
            type="text"
            placeholder="First Name *"
            value={this.state.firstname}
            onChange={this.handleInput('firstname')}
            required
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Last Name *"
            value={this.state.lastname}
            onChange={this.handleInput('lastname')}
            required
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Username *"
            value={this.state.username}
            onChange={this.handleInput('username')}
            required
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Enter email *"
            value={this.state.email}
            onChange={this.handleInput('email')}
            required
            />
          <input 
            className="signup-input"
            type="password"
            placeholder="Enter Password *"
            value={this.state.password}
            onChange={this.handleInput('password')}
            required
            />
          <input 
            className="signup-input"
            type="password"
            placeholder="Re-enter password *"
            value={this.state.re_enter}
            onChange={this.handleInput('re_enter')}
            required
            />
          <select className="signup-input location" name="Primary Dining Location" >
            <option className="signup-input" value="Primary Dining Location">Primary Dining Location</option>
            <option className="signup-input" value="Manhattan">Manhattan</option>
            <option className="signup-input" value="San Francisco">San Francisco</option>
          </select>
          <button className="signup-button" onClick={() => this.props.removeErrors()}>Create Account</button>
          <hr/>
          <p>Don't want to complete the form?</p>
          <div className="social-buttons">
            <button className="facebook-google-button">
              <img className="facebook-google-icon" src={window.facebookIconURL} />
              <a href="https://www.facebook.com/" className="facebook-google-link">Continue with Facebook</a>
            </button>
            <button className="facebook-google-button">
              <img className="facebook-google-icon" src={window.googleIconURL} />
              <a href="https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F%3Fgws_rd%3Dssl&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="facebook-google-link">Continue with Google</a>
            </button>
          </div>
        </form>
        <p>Selecting "Create Account" you are agreeing to the terms and conditions of the <a className="privacy-policy-link" href="#">NoTable User Agreement</a> and <a className="privacy-policy-link" href="#">Privacy Policy</a>.</p>
      </div>
    </div>
    );
  }
};

export default Signup;