import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// >import component file
import Testpage from "./pages/PageForTest";
import ConnectWallet from "./components/ConnectWallet";
import Profile from "./pages/Profile";
import Topbackground from "./components/Topbackground";
import Layout from "./components/Layout";
import Supabase from "./Supabase";
import Auth from "./Auth";
import Account from "./Account";
import Getdata from "./pages/supabase/Fetchdata.jsx";
import Adddata from "./pages/supabase/Insert.jsx";

function App() {
  return (
    <Router>
      <div>
        {/* <h1>My React App</h1> */}
        <Routes>
          <Route path="/phantom" element={<ConnectWallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Top" element={<Topbackground />} />

          <Route path="/Supabase" element={<Supabase />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Account" element={<Account />} />


          <Route path="/Getdata2" element={<Getdata />} />
          <Route path="/" element={<Layout />}>
          <Route path="/Getdata" element={<Getdata />} />
            <Route path="/Adddata" element={<Adddata />} />
            <Route path="/test" element={<Testpage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
