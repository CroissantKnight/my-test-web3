import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// >import component file
import Testpage from "./pages/PageForTest";
import ConnectWallet from "./components/ConnectWallet";
import Profile from "./pages/Profile";
import Topbackground from "./components/Topbackground";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div>
        {/* <h1>My React App</h1> */}
        <Routes>
          <Route path="/phantom" element={<ConnectWallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Top" element={<Topbackground />} />

          <Route path="/" element={<Layout />}>
            <Route path="/test" element={<Testpage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
