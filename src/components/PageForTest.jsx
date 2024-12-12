import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Testpage() {
  const navigate = useNavigate();
  const handleClick_back = (path, index) => {
    navigate("/");
  };
  const handleOUCH = () => {
    alert("OUCH!!!");
  };
  return (
    <div>
      <h1>trytodosomething</h1>
      <button onClick={handleOUCH}>Click me</button>
      <br/>
      <button onClick={handleClick_back}>Back to connect demo</button>
    </div>
  );
}

export default Testpage;