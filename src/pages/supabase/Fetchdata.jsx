import React, { useState } from "react";
import { handle_getdata } from "./Action.jsx"

export default function Getdata() {
  return (
    <div>
      {/* fetch data btn */}
      <div>
        <h2>chick to get data</h2>
        <button onClick={handle_getdata}>clickme</button>
      </div>
    </div>
  );
}
