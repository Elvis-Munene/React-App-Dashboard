import React from "react";
import {FaHome,FaChartLine,FaDatabase} from "react-icons/fa";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <a href="/" className="sidebar-list-item">
             <FaHome />
              Home
            </a>
            <a href="/Analytics" className="sidebar-list-item">
            <FaChartLine/>
              Analytics
            </a>
            <a href="/SubmissionForm" className="sidebar-list-item">
            <FaDatabase/>
            Add Data
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
