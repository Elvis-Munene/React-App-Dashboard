import React from "react";
import {FaHome,FaChartLine,FaDatabase} from "react-icons/fa";
import {Link} from 'react-scroll';;


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link   to="home" className="sidebar-list-item">
             <FaHome />
              Home
            </Link>
            <Link to="analytics" className="sidebar-list-item">
            <FaChartLine/>
              Analytics
            </Link>
            <Link to="submission" className="sidebar-list-item">
            <FaDatabase/>
            Add Data
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
