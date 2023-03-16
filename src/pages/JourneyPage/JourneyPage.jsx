import React from 'react'
import './JourneyPage.css'
import img from "../../assests/images/img3.svg"

const JourneyPage = () => {
    return (
        <div className='journeyContainer' >

            <h4 className='lineheading-2' >
                LEARNERS' JOURNEY
            </h4>

            <div className="journet__content">
                <div className="journeyContainer-left">
                    <h5>Road to Language Lab</h5>
                    <p>Step into the metaverse with Language Lab to develop
                        communication skills in the most effective manner. From
                        phonetics to soft skills courses, get a hold of the language
                        with global experts and AI with ease.</p>

                    <div className="journey__steps">

                        <div className="journeyStep">
                            <span>1</span>
                            <div className="stepContent">
                                <h3>Perfect phonetics</h3>
                                <p>Perfecting your base foundation</p>
                            </div>
                        </div>

                        <div className="journeyStep">
                            <span>2</span>
                            <div className="stepContent">
                                <h3>Focused training</h3>
                                <p>Learn with global educators in <br />
                                    the area of your interest and needs</p>
                            </div>
                        </div>

                        <div className="journeyStep">
                            <span>3</span>
                            <div className="stepContent">
                                <h3>Practice with AI</h3>
                                <p>Enhance your skills with AI driven tests</p>
                            </div>
                        </div>

                        <div className="journeyStep">
                            <span>4</span>
                            <div className="stepContent">
                                <h3>Assessment Scores</h3>
                                <p>Professional analysis to perfect <br />
                                    the needed areas</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="journeyContainer-right">
                    <img src={img} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default JourneyPage