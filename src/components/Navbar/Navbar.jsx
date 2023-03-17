import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import logo from "../../assests/images/logo1.svg";

import { AiFillLinkedin } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Sidebar from "../sidevar/Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <>
      <div className="sidebar">
        <img src={logo} alt="" className="logoSidebar" />
        <button
          className="close-btn"
          type="button"
          onClick={() => setShowSidebar(true)}
        >
          <FaBars />
        </button>
      </div>
      <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
      <div className="navbarContainer">
        <div className="navBarContainer-left">
          <p>
            {" "}
            <AiOutlineMail /> sales@hivesteps.com
          </p>
          <p>
            {" "}
            <BsFillTelephoneFill /> + 91-9560573049
          </p>
        </div>
        <div className="navBarContainer-right">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillYoutube />
          <AiFillLinkedin />
          <button className="loginBtn">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
