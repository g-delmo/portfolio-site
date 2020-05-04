import React, { Component } from "react";
import { Link } from "react-router-dom";
import rightArrow from "../assets/images/right-arrow.svg";

export default class MyProjects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <Link to="/projects" className="projects-link">
          <img src={rightArrow} alt="Right Arrow" className="projects-icon" />
          <span className="projects-title">My Projects</span>
        </Link>
      </div>
    );
  }
}
