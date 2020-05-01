import React, { Component } from "react";
import aboutIcon from "../assets/images/about-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="about-header">
          <img src={aboutIcon} alt="About Icon" className="about-icon" />
          <span className="about-header-text">About Me</span>
        </div>
        <span className="about-content">
          I am a young and passionate web developer from 🇩🇪 Germany working with
          the latest technologies{" "}
          <img src={reactIcon} alt="React Icon" className="react-icon" /> to
          create beautiful and highly responsive websites.
        </span>
      </div>
    );
  }
}
