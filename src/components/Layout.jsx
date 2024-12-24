// Layout.js
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // นำเข้า NavLink
import "./Layout.css";

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สมมติว่า User ล็อกอินแล้ว

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const getActiveClass = ({ isActive }) => (isActive ? "active" : "");
  return (
    <div  style={{ paddingTop: "60px", backgroundColor:"red"}}>
      <header className="navbar" >
        <img src="logo.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <NavLink to="/home" className={getActiveClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/learn" className={getActiveClass}>
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink to="/build" className={getActiveClass}>
              Build
            </NavLink>
          </li>
          <li>
            <NavLink to="/reward" className={getActiveClass}>
              Reward
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={getActiveClass}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/more" className={getActiveClass}>
              More
            </NavLink>
          </li>
        </ul>

        <div className="auth-buttons">
          {isLoggedIn ? (
            <>
              <div>
                <button className="signout-btn" onClick={handleLogout}>
                  Log out
                </button>
              </div>
              <span className="level-badge">Lvl 1</span>
              <div className="profile-notification">
                <span className="notification">0</span>
                <i className="bell-icon"></i>
                <img
                  src="profile-pic.jpg"
                  alt="Profile"
                  className="profile-pic"
                />
              </div>
            </>
          ) : (
            <>
              <button className="login-btn" onClick={handleLogin}>
                Log In
              </button>
              <button className="signup-btn">Sign Up</button>
            </>
          )}
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer" >
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}

export default Layout;
