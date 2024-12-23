import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Profile from "../pages/Profile"; 

function Testpage() {
  const navigate = useNavigate();
  const handleClick_back = (path, index) => {
    navigate("/phantom");
  };
  const handleOUCH = () => {
    alert("OUCH!!!");
  };
  return (
    <div>
      <Profile/>
      <h1>trytodosomething</h1>
      <button onClick={handleOUCH}>Click me</button>
      <br/>
      <br/>
      <button onClick={handleClick_back}>Back to connect demo</button>
    </div>
  );
}

export default Testpage;