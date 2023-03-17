import React, { useState } from "react";
import logo from "../../assests/images/logo1.svg";
import { FaTimes } from "react-icons/fa";

import "./sidebar.css";

const Sidebar = ({ showSidebar, closeSidebar }) => {
  return (
    <div className={`${showSidebar ? "sideBar show-sidebar" : "sideBar"}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <img src={logo} alt="" className="logoSidebar" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links" onClick={closeSidebar}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Values</a>
          </li>
          <li>
            <a href="#">Journey</a>
          </li>
          <li>
            <a href="#">Offerings</a>
          </li>
          <li>
            <a href="#">Why Us</a>
          </li>
          <li>
            <a href="#">Faqs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
