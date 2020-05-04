import React from "react";
import { Link, withRouter } from "react-router-dom";

// ASSETS
import "../assets/navbar.css";
import delmologo from "../assets/images/delmo-logo.svg";
import githubicon from "../assets/images/github.svg";
import twittericon from "../assets/images/twitter.svg";

class Navbar extends React.Component {
  render() {
    let location = this.props.location.pathname;
    return (
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img src={delmologo} alt="Delmo Logo" className="nav-logo" />
          </Link>
          <a href={location === "/" ? "/#about" : "/"} className="nav-link">
            About Me
          </a>
          <a href={location === "/" ? "/#projects" : "/"} className="nav-link">
            Projects
          </a>
          <a href={location === "/" ? "/#contact" : "/"} className="nav-link">
            Contact
          </a>
        </div>
        <div className="nav-right">
          <a href="https://github.com/" className="nav-icon-link">
            <img src={githubicon} alt="GitHub Icon" className="nav-icon" />
          </a>
          <a href="https://twitter.com/SniperDelmo" className="nav-icon-link">
            <img src={twittericon} alt="Twitter Icon" className="nav-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
