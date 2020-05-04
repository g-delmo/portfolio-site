import React, { Component } from "react";

// ASSETS
import twitterIcon from "../assets/images/twitter-white-icon.png";

export class Project extends Component {
  render() {
    return (
      <div className="project-card">
        <img src={this.props.project.icon} className="project-icon" />
        <span className="project-title">{this.props.project.name}</span>
        <span className="project-description">
          {this.props.project.description}
        </span>
        <a
          href={"https://twitter.com/" + this.props.project.twitterLink}
          className="project-twitter"
        >
          <img src={twitterIcon} />
        </a>

        <a href={this.props.project.siteLink} className="project-link">
          {this.props.project.siteLink ? "VISIT SITE" : "COMING SOON"}
        </a>
      </div>
    );
  }
}

export default Project;
