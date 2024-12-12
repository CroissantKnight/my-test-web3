import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// >import component file
import Testpage from "./pages/PageForTest";
import ConnectWallet from "./components/ConnectWallet";
import Profile from "./pages/Profile";
import Topbackground from "./components/Topbackground";

function App() {
  return (
    <Router>
      <div>
        {/* <h1>My React App</h1> */}
        <Routes>
          <Route path="/" element={<ConnectWallet />} />
          <Route path="/test" element={<Testpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Top" element={<Topbackground />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;