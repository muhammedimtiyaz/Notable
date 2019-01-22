import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    };
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

handleSubmit(e) {
  e.preventDefault();
  this.props.createNewUser(this.state).then( () => this.props.history.push("/"));
}

  render () {
    return (
      <div className="signup-form">
        <h2>Welcome to OpenTable!</h2>
        <form>
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
            placeholder="Enter email *"
            value={this.state.email}
            onChange={this.handleInput('email')}
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Enter Password *"
            value={this.state.password}
            onChange={this.handleInput('password')}
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="Re-enter password *"
            value={this.state.password}
            onChange={this.handleInput('password')}
            />
          <input 
            className="signup-input"
            type="text"
            placeholder="First Name *"
            value={this.state.firstname}
            onChange={this.handleInput('firstname')}
            />
        </form>
      </div>
    );
  }
};

export default Signup;