import React from "react";
import "../css/AboutUs.css";
import Title from "./Title";

export default function AboutUs() {
  const whyChooseUsData = [
    "Lorem Ipsum Dolor",
    "Tempor incididunt",
    "Lorem ipsum dolor",
    "Incididunt ut labore",
    "Aliquip ex ea commodo",
    "Lorem ipsum dolor",
    "Exercitation ullamco",
    "Lorem ipsum dolor"
  ];
  return (
    <>
    <div className="about-us">
      <div className="about-left">
        <img
          src="https://react-landing-page-template.herokuapp.com/img/about.jpg"
          alt="About Step In Technology"
        ></img>
      </div>
      <div className="about-right">
        <h2>About Us</h2>

        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>

        <h2>Why Choose Us</h2>
        <div className="why-choose-us">
          <ul>
            {whyChooseUsData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Title title="OUR MISSION & VISION"></Title>
    <div className="mission-vision">
      <div className="mission">
        <h2>Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div className="vision">
        <h2>Vision</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
    </>
  );
}
