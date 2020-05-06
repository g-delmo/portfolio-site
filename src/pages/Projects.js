import React, { Component } from "react";
import Project from "../components/Project";

// ASSETS
import "../assets/projects.scss";
import hyperIcon from "../assets/images/hyper-icon.svg";
import flipsIcon from "../assets/images/flips-icon.svg";
import palaceIcon from "../assets/images/palace-icon.svg";
import theBotTalkIcon from "../assets/images/thebottalk-icon.svg";
import levfnfIcon from "../assets/images/levfnf-icon.svg";
import spacetradingIcon from "../assets/images/spacetrading-icon.svg";
import sgIcon from "../assets/images/sg-icon.svg";

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
    {
      name: "PalacebotIO UI",
      description:
        "Palacebot is one of the fastest Palace bots on the market. Due to the increasing audience and success from the initial testing of the bot, a UI was designed by Jailbroke(@jailbroke_tesla) and developed through the course of 2 weeks.",
      icon: palaceIcon,
      twitterLink: "PalaceBotIO",
      siteLink: "https://twitter.com/SniperDelmo/status/1257841471820124160",
    },
    {
      name: "TheBotTalk",
      description:
        "TheBotTalk is the leading podcast show that covers all topics from botting to reselling in quick and entertaining interviews. A landing page, and system to store episodes was created and developed. Design in cooperation with Pizzathehut (@notbzhou)",
      icon: theBotTalkIcon,
      twitterLink: "thebottalk",
      siteLink: "https://www.thebottalk.com",
    },
    {
      name: "LevFNF",
      description:
        "LevFNF is an exclusive FNF group hosted on the Discord platform. With this website development project, I took a different approach with a neumorphic design featuring the professional and talented designer Meli(@MELI_Creative)",
      icon: levfnfIcon,
      twitterLink: "levfnf",
      siteLink: "https://www.levfnf.co/",
    },
    {
      name: "Space Trading",
      description:
        "Space Trading is an options trading group specialized in teaching members profitable trading tecniques. With this client, I developed a landing website for the brand based on a design by Pizzathehut (@notbzhou)",
      icon: spacetradingIcon,
      twitterLink: "spacetradingio",
      siteLink: "https://spacetrading.io/",
    },
    {
      name: "SG Cooks Tools",
      description:
        "SG Cooks is a Discord group that aims to make its members secure highly in-demand and profitable items such as sneakers, clothing and random items. I developed the front-end code for the majority of their add-on tools such as SG Convert, SG Assist, SG Captcha, and others.",
      icon: sgIcon,
      twitterLink: "SGCoooks",
      siteLink: "https://imgur.com/a/QGYQnE4",
    },
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
