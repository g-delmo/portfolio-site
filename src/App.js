import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  Redirect,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import "./assets/fonts.scss";

class App extends React.Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#050925",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={Projects} />
        </Router>
      </div>
    );
  }
}
export default App;
