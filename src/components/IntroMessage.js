import React, { Component } from "react";

export default class IntroMessage extends Component {
  render() {
    return (
      <div className="intro-message">
        <span className="message-left">- Who are you?</span>
        <span className="message-right">
          Hi, I'm <span className="message-right-underline">Delmo</span>!
        </span>
      </div>
    );
  }
}
