import React from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "remixicon/fonts/remixicon.css"; // Import Remix Icons
import "../assets/scss/sidebar.css"; // Your custom styles

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const menuItems = [
    { label: "Dashboard", icon: "ri-dashboard-line", path: "/" },
    { label: "Client", icon: "ri-user-line", path: "/client" },
    { label: "Settings", icon: "ri-settings-line", path: "/settings" },
  ];

  return (
    <div className={`app-menu navbar-menu ${isCollapsed ? "collapsed" : ""}`}>
      <SimpleBar className="h-100">
        <div className="navbar-brand-box">
          <div className="logo logo-light">
            <span className="logo-lg">Admin System</span>
          </div>
          <button className="btn toggle-btn" onClick={toggleSidebar}>
            <i className={`ri-${isCollapsed ? "menu-unfold-line" : "menu-fold-line"}`}></i>
          </button>
        </div>

        <ul className="navbar-nav" id="navbar-nav">
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link menu-link" to={item.path}>
                <i className={item.icon}></i>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;