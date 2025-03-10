import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Layouts/Sidebar";
import Dashboard from "./pages/Dashboard/index";
import Client from "./pages/Client/index";
import Settings from "./pages/Settings/index";
import "remixicon/fonts/remixicon.css"; 
import "./assets/scss/button.css"

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div style={{ flex: 1, padding: "20px", marginLeft: isCollapsed ? "80px" : "240px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/client" element={<Client />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;