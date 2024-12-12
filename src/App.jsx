import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import component files
import Testpage from "./components/PageForTest";
import ConnectWallet from "./components/ConnectWallet";
import Navbar from "./Layout/Navbar"; // Import Navbar

function App() {
  return (
    <Router>
      {/* Navbar จะปรากฏในทุกหน้า */}
      <Navbar />
      <div className="mt-16"> {/* เพิ่ม margin-top เพื่อหลบ Navbar */}
        <Routes>
          <Route path="/" element={<ConnectWallet />} />
          <Route path="/test" element={<Testpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
