import React, { Component } from "react";
import rightArrow from "../assets/images/right-arrow.svg";

export default class MyProjects extends Component {
  render() {
    return (
      <div className="projects">
        <a href="/projects" className="projects-link">
          <img src={rightArrow} alt="Right Arrow" className="projects-icon" />
          <span className="projects-title">My Projects</span>
        </a>
      </div>
    );
  }
}
