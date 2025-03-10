import React, { useState, useEffect } from "react";
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

  // Function to check screen size and collapse sidebar
  const checkScreenSize = () => {
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    setIsCollapsed(isMobile);
  };

  // Add event listener for window resize
  useEffect(() => {
    checkScreenSize(); // Check screen size on initial load
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div
          className="main-content"
          style={{
            flex: 1,
            padding: "20px",
            marginLeft: isCollapsed ? "80px" : "240px", // Adjust margin based on collapsed state
          }}
        >
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