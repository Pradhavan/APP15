import React from 'react'
import "./Partner.css"
import img1 from "../../assests/images/img11.svg"
import img2 from "../../assests/images/img12.svg"

const Partner = () => {
    return (
        <div className='partnerContainer' >

            <h4 className='lineheading-5' >
                YOUR TRAINING PARTNER
            </h4>

            <h2>Our Partners</h2>


            <div className="partners__cards">

                <div className="partner__card">
                    <img src={img1} alt="img1" />
                </div>

                <div className="partner__card">
                    <img src={img2} alt="img1" />
                </div>

                <div className="partner__card">
                    <img src={img1} alt="img1" />
                </div>

            </div>

        </div>
    )
}

export default Partner