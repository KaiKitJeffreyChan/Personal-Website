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
            path="/Mainscreen"
            component={MainScreen}
          />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );

  }
}

export default App;
