import React from 'react'
import './Navbar.css'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='navbarContainer' >

            <div className="navBarContainer-left">
                <p> <AiOutlineMail /> sales@hivesteps.com</p>
                <p> <BsFillTelephoneFill /> + 91-9560573049</p>
            </div>
            <div className="navBarContainer-right">
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiFillYoutube/>
                <AiFillLinkedin/>
                <button className='loginBtn' >Login</button>
            </div>

        </div>
    )
}

export default Navbar;