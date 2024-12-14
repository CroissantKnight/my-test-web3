import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // นำเข้า NavLink
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สมมติว่า User ล็อกอินแล้ว

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="navbar">
      <img src="logo.png" alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/learn" activeClassName="active">Learn</NavLink></li>
        <li><NavLink to="/build" activeClassName="active">Build</NavLink></li>
        <li><NavLink to="/reward" activeClassName="active">Reward</NavLink></li>
        <li><NavLink to="/resources" activeClassName="active">Resources</NavLink></li>
        <li><NavLink to="/more" activeClassName="active">More</NavLink></li>
      </ul>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <div>
            <button className="signout-btn" onClick={handleLogout}>Log out</button>
            </div>
            <span className="level-badge">Lvl 1</span>
            <div className="profile-notification">
              <span className="notification">0</span>
              <i className="bell-icon"></i>
              <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
            </div>
          </>
        ) : (
          <>
            <button className="login-btn" onClick={handleLogin}>Log In</button>
            <button className="signup-btn">Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
