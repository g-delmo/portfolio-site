import React from "react";
import "../assets/landing.css";
import Navbar from "../components/Navbar";
import IntroMessage from "../components/IntroMessage";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";

export default class Landing extends React.Component {
  contact_methods = {
    discord: "https://discord.gg/Pc3XbTt",
    twitter: "https://twitter.com/SniperDelmo",
    email: "mailto:guillermo.delmolino@gmaill.com",
  };

  contactMethods = [
    {
      name: "Discord",
      link: "https://discord.gg/Pc3XbTt",
      color: "#7289DA",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/SniperDelmo",
      color: "#00ACEE",
    },
    {
      name: "Email",
      link: "mailto:guillermo.delmolino@gmaill.com",
      color: "#D44638",
    },
  ];

  services = [
    {
      name: "Front-End Web Development",
      description:
        "I specialise in making beautiful yet responsive websites with the latest technologies to ensure your site will always stand out from the crowd. All with minimal effort required from you.",
      color: "#e96a83",
    },
    {
      name: "Front-End UI Development",
      description:
        "I also create fast and efficient UIs that can be easily integrated into Electron or other frameworks to create desktop applications.",
      color: "#46f16e",
    },
    {
      name: "Web & UI Design",
      description:
        "If you’re looking for a full design + development package that’s not a problem. I am partnered with several talented designers and together we can turn your idea into a reality.",
      color: "#f1a45d",
    },
  ];

  render() {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <IntroMessage />
          <AboutMe />
          <Services services={this.services} />
          <MyProjects id="projects" />
          <Contact contactMethods={this.contactMethods} id="contact" />
        </div>
      </div>
    );
  }
}
