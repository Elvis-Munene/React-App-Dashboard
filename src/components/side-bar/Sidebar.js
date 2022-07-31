import React from "react";
import {FaHome,FaChartLine,FaUser} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
             <FaHome />
              Home
            </li>
            <li className="sidebar-list-item">
            <FaChartLine/>
              Analytics
            </li>
            <li className="sidebar-list-item">
            <FaUser/>
            Users
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
