import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// >import component file
import Testpage from "./components/PageForTest";
import ConnectWallet from "./components/ConnectWallet";

function App() {
  return (
    <Router>
      <div>
        {/* <h1>My React App</h1> */}
        <Routes>
          <Route path="/" element={<ConnectWallet />} />
          <Route path="/test" element={<Testpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;