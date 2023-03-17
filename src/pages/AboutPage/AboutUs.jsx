import React from "react";
import "./AboutUs.css";
import aboutImg from "../../assests/images/img2.svg";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsContainer-left">
        <h1 className="heading">ABOUT HIVE STEPS</h1>

        <span>
          Language Learning <br />
          Platform powered <br />
          by Artificial Intelligence
        </span>
        <p>
          Hive steps bridges the gap between learning a new language with ease,
          practice and real-time feedback through its futuristic platform. Based
          on years of research from global educators to help learn with
          confidence. Be it IELTS, SAT, or any interview.
        </p>
        <ul>
          <li>Includes Learning Courseware and Practice Modules</li>
          <li>Focused on Reading, Listening, Writing and</li>
          <li>Speaking in the right order</li>
          <li>Create your own content & Assessments easily</li>
          <li>Scalable Cloud solutions to grow as your needs grow.</li>
        </ul>
        <button className="connectBtn">Connect with Us</button>
      </div>
      <div className="aboutUsContainer-right">
        <div className="aboutImgDiv">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
