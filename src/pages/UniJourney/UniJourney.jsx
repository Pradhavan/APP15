import React from "react";
import "./UniJourney.css";
import img from "../../assests/images/img4.svg";

const UniJourney = () => {
  return (
    <div className="unijourneyContainer">
      <h4 className="lineheading-3">UNIVERSITY JOURNEY</h4>

      <div className="journet__content">
        <div className="journeyContainer-right">
          <img src={img} alt="img" />
        </div>

        <div className="journeyContainer-left">
          <h5>Recruit Excellence</h5>
          <p>
            Hive Steps presents the future development platform to develop
            communication skills and a strategic mindset to bridge the
            professional gap between campus and corporate for students.
          </p>

          <div className="journey__steps">
            <div className="journeyStep">
              <span>1</span>
              <div className="stepContent">
                <h3>Soft Skills/ Technical Training</h3>
                <p>Learn from global educators in your interest fields</p>
              </div>
            </div>

            <div className="journeyStep">
              <span>2</span>
              <div className="stepContent">
                <h3>Focused training</h3>
                <p>
                  Learn with global educators in <br />
                  the area of your interest and needs
                </p>
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
                <p>
                  Professional analysis to perfect <br />
                  the needed areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniJourney;
