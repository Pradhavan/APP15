import React from 'react'
import "./Footer.css"
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>

      <div className="footerWrapper">
        <div className="footerTop">

          <div className='footerListDiv' >
            <h2>About Us</h2>

            <p>Language Learning Platform powered by Artificial Intelligence</p>

            <button className='knowMoreBtn' >Know more</button>
          </div>

          <div className='footerListDiv' >
            <h2>Featured links</h2>

            <p>Gallery</p>
            <p>Blogs</p>
            <p>Contact us</p>
          </div>

          <div className='footerListDiv' >
            <h2>Other offerings</h2>

            <p>Princeton</p>
            <p>Hive Grad</p>
            <p>Fakerz</p>
          </div>

          <div className='footerListDiv' >
            <h2>Contact info</h2>

            <p>+ 91-9560573049</p>
            <p>support@hivesteps.com</p>
          </div>


        </div>

        <div className="footer__socialMedia">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillYoutube />
          <AiFillLinkedin />
        </div>
      </div>

      <div className="footerBottom">
        <p>Princeton Hive ©️ 2022 All Right Reserved</p>
        <p>Site Map</p>
        <p>Privacy Policy</p>
        <p>Terms and conditions apply</p>
      </div>

    </footer>
  )
}

export default Footer