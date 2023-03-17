import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faqContainer">
      <h2 className="lineheading">
        {" "}
        <span>WANT TO CLEAR YOUR DOUBTS?</span>{" "}
      </h2>

      <h4>Frequently Asked Questions</h4>

      <p>
        Hive steps bridges the gap between learning a new language with ease,
        practice and real-time feedback through its futuristic platform. Based
        on years of research from global educators to help learn with
        confidence. Be it IELTS, SAT, or any interview.
      </p>

      <div className="faqs">
        <div className="faq">
          <p>
            Q.How do I sign up for corporate training for my college students?
          </p>
          <span>
            Click on Connect with us and sign up the futuristic training
            platform.
          </span>
        </div>

        <div className="faq">
          <p>Q.Will I receive any certificate for completing the training?</p>
          <span>
            Yes, after completing the training course, you will receive the
            certificate for the same.
          </span>
        </div>

        <div className="faq">
          <p>Q.How will I get access to my selected candidates?</p>
          <span>
            After logging in your account, you can access the selected
            candidates.
          </span>
        </div>

        <div className="faq">
          <p>Q.What should I do to access the same questionnaires again?</p>
          <span>
            You can go the company's website to access the same questionnaire
            again.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
