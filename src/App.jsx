import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// >import component file
import Testpage from "./pages/PageForTest";
import ConnectWallet from "./components/ConnectWallet";
import Profile from "./pages/Profile";
import Topbackground from "./components/Topbackground";
import Navbar from "./Layout/Navbar"; // Import Navbar


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        {/* <h1>My React App</h1> */}
        <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/phantom" element={<ConnectWallet />} />
          <Route path="/Top" element={<Topbackground />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Testpage />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;