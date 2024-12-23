import React from "react";
// import "./Profile.css";
import Topbackground from "../components/Topbackground.jsx";
function Profile() {
  return (
    <>
      <Topbackground />
      <div className="status">
        <div className="div-rounded-img">
          <div className="white-rounded-img">
            <img
              alt="Profile"
              loading="lazy"
              decoding="async"
              src="https://assets.hackquest.io/users/avatars/avatar-default-10.png"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="profile-content">
          <h1 style={{ fontSize: "5vw" }}>Profile</h1>{" "}
        </div>
      </div>
    </>
  );
}

export default Profile;
