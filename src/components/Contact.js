import React, { Component } from "react";
import dialogIcon from "../assets/images/dialogue-icon.svg";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact-header">
          <img src={dialogIcon} alt="Dialog Icon" className="contact-icon" />
          <span className="contact-title">Contact</span>
        </div>
        {this.props.contactMethods.map((method) => {
          const colorStyle = {
            color: method.color,
            marginLeft: 5,
          };
          return (
            <a href={method.link} className="contact-method" key={method.color}>
              Contact via <span style={colorStyle}>{method.name}</span>
            </a>
          );
        })}
      </div>
    );
  }
}
