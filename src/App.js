import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Redirect,
} from "react-router-dom";
import Landing from "./pages/Landing";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing} />
        </Router>
      </div>
    );
  }
}
export default App;
