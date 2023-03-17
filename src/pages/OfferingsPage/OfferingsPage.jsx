import React from "react";
import "./OfferingsPage.css";
import img1 from "../../assests/images/img5.svg";
import img2 from "../../assests/images/img6.svg";

const OfferingsPage = () => {
  return (
    <div className="ourOfferingsContainer">
      <h4 className="lineheading-4">OUR OFFERINGS</h4>

      <h2>Explore Our Offerings</h2>

      <div className="offerings__gallery">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
      </div>

      <div className="offerings__steps">
        <div className="offeringStep">
          <span>1</span>
          <div className="stepContent">
            <h3>The LSRW Module</h3>
            <p>
              Highly effective listening, speaking, reading and writing
              methodologies
            </p>
          </div>
        </div>

        <div className="offeringStep">
          <span>2</span>
          <div className="stepContent">
            <h3>Lesson Studio</h3>
            <p>Grab customised learning materials for optimum results</p>
          </div>
        </div>

        <div className="offeringStep">
          <span>3</span>
          <div className="stepContent">
            <h3>Skills Trainings & Workshops</h3>
            <p>Upskill and curate 21st-century skills</p>
          </div>
        </div>

        <div className="offeringStep">
          <span>4</span>
          <div className="stepContent">
            <h3>Global Educators</h3>
            <p>Connect with experts around the globe</p>
          </div>
        </div>

        <div className="offeringStep">
          <span>5</span>
          <div className="stepContent">
            <h3>AI Assessment</h3>
            <p>
              Practice with AI, analyse your scores and generate your global
              ranking
            </p>
          </div>
        </div>

        <div className="offeringStep">
          <span>6</span>
          <div className="stepContent">
            <h3>User Friendly</h3>
            <p>Learn with ease in the metaverse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingsPage;
