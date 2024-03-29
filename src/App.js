import React, { Component } from "react";
import MainScreen from "./views/Main/MainScreen";
import NotFound from "./views/404/404.js";
import Introduction from "./views/Intro/introduction.js";

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
          <Route exact path="/" component={Introduction} />
          <Route exact path="/main" component={MainScreen} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
