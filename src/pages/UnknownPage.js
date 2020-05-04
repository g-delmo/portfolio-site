import React, { Component } from "react";

export class UnknownPage extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1
          style={{
            fontSize: "150px",
            fontWeight: 900,
            alignSelf: "center",
            marginBottom: "25px",
            color: "#92a7e9",
          }}
        >
          404
        </h1>
        <span
          style={{
            alignSelf: "center",
            fontSize: "31px",
            fontWeight: "bold",
          }}
        >
          Sorry chief, we can't find this page.
        </span>
      </div>
    );
  }
}

export default UnknownPage;
