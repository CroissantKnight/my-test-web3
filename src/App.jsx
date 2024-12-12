import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// >import component file
import Testpage from "./pages/PageForTest";
import ConnectWallet from "./components/ConnectWallet";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        {/* <h1>My React App</h1> */}
        <Routes>
          <Route path="/" element={<ConnectWallet />} />
          <Route path="/test" element={<Testpage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;