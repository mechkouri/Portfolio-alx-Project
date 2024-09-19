import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO Learnify"
              title="The Premier Online Learning Platform"
            />
            <p>
              Enhance your skills, switch careers, or take the next step in your
              professional journey with over 5,000 courses, certificates, and
              degree programs from top universities and leading companies.
            </p>
            <div className="button">
              <button className="primary-btn">
                START YOUR JOURNEY <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="secondary-btn">
                BROWSE COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
