import React, { Component } from "react";
import Project from "../components/Project";

// ASSETS
import "../assets/projects.scss";
import hyperIcon from "../assets/images/hyper-icon.svg";
import flipsIcon from "../assets/images/flips-icon.svg";

export class Projects extends Component {
  projects = [
    {
      name: "Hyper Raffle Bot",
      description:
        "Hyper is the #1 cloud raffle bot, with huge amounts of success from its users. With this client, I developed the front-end code for their landing page, in cooperation with Empowers Studio (@EmpowersStudio) for the designing process.",
      icon: hyperIcon,
      twitterLink: "hyperrafflebot",
      siteLink: "https://hyperrafflebot.io/",
    },
    {
      name: "Flips IO",
      description:
        "Flips IO is a cook group dedicated to offering their members exclusive information for flipping random items. I cooperated with UI and graphic desginer Pizzathehut (@notbzhou) to create a landing page for promoting and selling their subscription plans.",
      icon: flipsIcon,
      twitterLink: "flipsio",
      siteLink: "https://www.flipsio.co/",
    },
    // TODO: Finish adding rest of the projects
  ];
  lastProject = {
    name: "More Coming Soon",
    description:
      "I am always available for working on new projects, and look forward to adding new brands to this list.",
    twitterLink: "SniperDelmo",
  };
  render() {
    return (
      <div className="projects-page">
        <span className="projects-header">My Projects</span>
        <span className="projects-subheader">
          A collection of my current and past projects
        </span>
        <div className="projects-grid">
          {this.projects.map((project) => {
            return <Project project={project} />;
          })}
          <Project project={this.lastProject} />
        </div>
      </div>
    );
  }
}

export default Projects;
