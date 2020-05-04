import React, { Component } from "react";
import servicesIcon from "../assets/images/services-icon.svg";

export default class Services extends Component {
  render() {
    return (
      <div className="services" id="services">
        <div className="services-header">
          <img src={servicesIcon} alt="Label Icon" className="services-icon" />
          <span className="services-title">Services</span>
        </div>
        {this.props.services.map((service) => {
          const cardStyle = {
            borderLeftColor: service.color,
          };
          return (
            <div className="service-item" style={cardStyle} key={service.color}>
              <span className="service-title">{service.name}</span>
              <span className="service-description">{service.description}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
