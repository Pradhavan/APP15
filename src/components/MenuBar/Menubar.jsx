import React from 'react'
import './Menubar.css'
import logo from "../../assests/images/logo1.svg"

const Menubar = () => {
    return (
        <div className='menuBarContainer' >

            <a href="/">
                <img src={logo} alt="" className='logo' />
            </a>

            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Values</a></li>
                <li><a href="#">Journey</a></li>
                <li><a href="#">Offerings</a></li>
                <li><a href="#">Why Us</a></li>
                <li><a href="#">Faqs</a></li>
            </ul>

        </div>
    )
}

export default Menubar