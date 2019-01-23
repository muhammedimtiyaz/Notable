import React from "react";
import { removeErrors } from "../../actions/session_action";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillUnmount() {
  //   removeErrors(this.props.errors);
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then( () => this.props.history.push("/"));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

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



  render() {
    return (
      <div className="login-form">
        <h2>Please sign in</h2>
        <br/>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Email"
            onChange={this.update("email")}
            value={this.state.email}/>
          <input 
            type="password"
            placeholder="Password"
            onChange={this.update("password")}
            value={this.state.password}/>
          <button className="login-button" onClick={() => this.props.removeErrors()}>Sign In</button>
          <p>Don't want to complete the form?</p>
          <div className="facebook-google-button-div">
            <a href="https://www.facebook.com/" className="facebook-google-btn"><i className="fab fa-facebook-f"></i>Continue with Facebook</a>
          </div>
          <div className="facebook-google-button-div">
            <a href="https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F%3Fgws_rd%3Dssl&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="facebook-google-connect-button"><i className="fab fa-google"></i>Continue with Google</a>
          </div>
          <div>
            <span>New To OpenTable?</span>
            {this.props.navLink}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;