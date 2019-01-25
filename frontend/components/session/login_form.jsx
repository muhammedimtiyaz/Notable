import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.demologin = this.demologin.bind(this);
    this.demoUserHelper = this.demoUserHelper.bind(this);
    this.closeAndRemoveErrors = this.closeAndRemoveErrors.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    this.state = {
      email: 'demo',
      password: 'hunter12'
    }
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  demologin(e) {
    e.preventDefault();
    const email = 'demo'.split('');
    const password = 'hunter12'.split('');
    const submit = document.getElementById('login-button');
    this.setState({ email: '', password: '' }, () =>
      this.demoUserHelper(email, password, submit)
    );
  }

  demoUserHelper(email, password, submit) {
    if (email.length > 0) {
      this.setState(
        { email: this.state.email + email.shift() }, () => {
          window.setTimeout(() =>
            this.demoUserHelper(email, password, submit), 50);
        }
      );
    } else if (password.length > 0) {
      this.setState(
        { password: this.state.password + password.shift() }, () => {
          window.setTimeout(() =>
            this.demoUserHelper(email, password, submit), 50);
        }
      );
    } else {
      submit.click();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(this.props.closeModal);
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

  closeAndRemoveErrors(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.removeErrors();
  }

  render() {
    return (
      <div id="modal-login" className="modal">
        <div className="modal-login-form">
          <h2>Please sign in</h2>
          <span className="close" onClick={this.closeAndRemoveErrors}>&times;</span>
          <hr></hr>
          <br/>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <input 
              className="login-input"
              type="text"
              placeholder="Email"
              onChange={this.update("email")}
              value={this.state.email}
              required/>
            <input 
              className="login-input"
              type="password"
              placeholder="Password"
              onChange={this.update("password")}
              value={this.state.password}
              required/>
            <button id="login-button" className="login-button" onClick={() => this.props.removeErrors()}>Sign In</button>
          </form>
            <div className="demo-user-button">
              <form onSubmit={this.handleDemo}>
                <input required type="submit" value="Demo Login" onClick={this.demologin}/>
              </form>
            </div>
            <hr></hr>
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
            <div className="footer">
              <span>New To OpenTable?</span>&nbsp;
              {this.props.signupForm}
            </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;




