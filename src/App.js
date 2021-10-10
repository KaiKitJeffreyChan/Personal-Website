import React, { Component } from "react";
import MainScreen from "./MainScreen";
import NotFound from "./404.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route
            exact
            path="/Personal-Website/Mainscreen"
            component={MainScreen}
          />
          <Route exact path="/Personal-Website/404" component={NotFound} />
          <Redirect to="/Personal-Website/404" />
        </Switch>
      </Router>
    );

  }
}

export default App;
