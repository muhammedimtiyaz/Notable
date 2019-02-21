import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const mainNavWithSessionLinks = () => {
    return (
      <div className="main-nav">
        <Link to="/" className="header-link">
          <section className="logo left-nav">
            <img className="homepage-icon" src={window.openTableIconURL} />
            <div className="logo-text">NoTable</div>
          </section>
        </Link>
        <div className="right-nav">
          <nav className="login-signup">
            <button className="signup-btn" onClick={ () => openModal('signup')}>Signup</button>
            <button className="login-btn" onClick={ () => openModal('login')}>Sign in</button>
          </nav>
        </div>
      </div>
    )
  }

  const mainNavWithGreetings = () => {
    return (
      <div className="main-nav">
        <Link to="/" className="header-link">
          <section className="logo left-nav">
            <img className="homepage-icon" src={window.openTableIconURL} />
            <div className="logo-text">NoTable</div>
          </section>
        </Link>
        <div className="right-nav">
          <div className="dropdown">
            <button className="dropbtn">Hi, {currentUser.firstName}<i className="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <div className="dropdown-content">
              <Link className="dropdown-content-link" to={`/users/${currentUser.id}`}>My Profile</Link>
              <Link className="dropdown-content-link"to="/" onClick={() => logout()}>Sign Out</Link>
            </div>
          </div>
        </div> 
      </div>
    )
  }

  return currentUser ? mainNavWithGreetings() : mainNavWithSessionLinks();
};


export default Greeting;
