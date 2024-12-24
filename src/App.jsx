import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// >import component file
import Testpage from "./pages/PageForTest";
import ConnectWallet from "./components/ConnectWallet";
import Profile from "./pages/Profile";
import Topbackground from "./components/Topbackground";
import Layout from "./Layout/Layout"; // Import Navbar


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Testpage />} />
          </Route>
          <Route path="/phantom" element={<ConnectWallet />} />
          <Route path="/Top" element={<Topbackground />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;