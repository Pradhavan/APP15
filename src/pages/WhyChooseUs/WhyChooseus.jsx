import React from 'react'
import "./WhyChooseus.css"
import img7 from "../../assests/images/img7.svg"
import img8 from "../../assests/images/img8.svg"
import img9 from "../../assests/images/img9.svg"
import img10 from "../../assests/images/img10.svg"

const WhyChooseus = () => {
    return (
        <div className='whyChooseUsContainer' >

            <h2 className='lineheading' > <span>YOUR TRAINING PARTNER</span> </h2>

            <h4>Why Choose Us?</h4>

            <p>Language lab is a perfect solution to learn languages from foundation to advanced. Our 21st century, user-friendly software enables learning with AI driven communication assessments and scores. Learn in the meta.</p>


            <div className="whyChooseUs__cards">

                <div className="whyChoose__card">
                    <img src={img7} alt="" />
                    <h3>Global/ Industry Experts</h3>
                    <p>Acquire the need-specific skills from all around the globe</p>
                </div>

                <div className="whyChoose__card">
                    <img src={img8} alt="" />
                    <h3>Lesson Studio</h3>
                    <p>Grab customised learning materials for optimum results</p>
                </div>

                <div className="whyChoose__card">
                    <img src={img9} alt="" />
                    <h3>The LSRW Module</h3>
                    <p>Highly effective listening, speaking, reading and writing methodologies</p>
                </div>

                <div className="whyChoose__card">
                    <img src={img10} alt="" />
                    <h3>AI Assessments</h3>
                    <p>Analyse your skills with AI <br /> and experts</p>
                </div>

            </div>

            <button className='connectBtn' >Connect with Us</button>


        </div>
    )
}

export default WhyChooseus