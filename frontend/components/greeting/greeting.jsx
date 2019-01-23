import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );
  const personalGreeting = () => (
    <div className="dropdown-menu">
      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Hi, {currentUser.username}
        <span className="dropdown-icon"><i className="fas fa-chevron-circle-down"></i></span>
      </a>

      <div className="dropdown-menu-items" aria-labelledby="dropdownMenuLink">
        <Link to="/Profile">My Profile</Link>
        <Link to="/Favorites">My Favorite Restaurants</Link>
        <Link to="/" onClick={() => logout()}>Sign Out</Link>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
