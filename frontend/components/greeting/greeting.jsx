import React from 'react';
import { Link } from 'react-router-dom';
import { IconDotCircle, IconCircle } from "react-icons/fa";
// import IconCircle from "react-icons";



const Greeting = ({ currentUser, logout, openModal }) => {

  // const sessionLinks = () => (
  //     <div className="right-nav">
  //       <nav className="login-signup">
  //         <button className="login-btn" onClick={ () => openModal('login')}>Login</button>
  //         <button className="signup-btn" onClick={ () => openModal('signup')}>Signup</button>
  //       </nav>
  //     </div>
  // );

  // const personalGreeting = () => (
  //   <div className="right-nav">
  //     <div className="dropdown-menu">
  //       <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //       <p className="greeting">Hi, {currentUser.username}</p>
  //       <span className="dropdown-icon"><i className="fas fa-chevron-circle-down"></i></span>
  //       </a>

  //       <div className="dropdown-menu-items" aria-labelledby="dropdownMenuLink">
  //         <Link to="/Profile">My Profile</Link>
  //         <Link to="/Favorites">My Favorite Restaurants</Link>
  //         <Link to="/" onClick={() => logout()}>Sign Out</Link>
  //       </div>
  //     </div>
  //   </div>
  // );

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
          <div className="homepage-icon left-nav">
            <img className="homepage-icon" src={window.openTableIconURL} />
            <div className="logo-text">NoTable</div>
          </div>
        </Link>
        <div className="right-nav">
          <div className="dropdown">
            <button className="dropbtn">Hi, {currentUser.username}<i className="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <div className="dropdown-content">
              <Link to={`/users/${currentUser.id}`}>My Profile</Link>
              <Link to="/" onClick={() => logout()}>Sign Out</Link>
            </div>
          </div>
            {/* <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <p className="greeting">Hi, {currentUser.username}</p>
              <span className="dropdown-icon"><i className="fas fa-chevron-circle-down"></i></span>
            </a>
            <div className="menu-container">
              <div className="menu-section">
                <div className="dropdown-menu-items" aria-labelledby="dropdownMenuLink">
                  <select>
                    <option><Link to="/Profile">My Profile</Link></option>
                    <option><Link to="/Favorites">My Favorite Restaurants</Link></option>
                    <option><Link to="/" onClick={() => logout()}>Sign Out</Link></option>
    </select> */}
        </div> 
      </div>
    )
  }

  return currentUser ? mainNavWithGreetings() : mainNavWithSessionLinks();
};


export default Greeting;
