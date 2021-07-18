import React, { Component } from "react";
import "./App.css";
import MainScreen from "./MainScreen";
import NotFound from "./404.js";
import Window from "./components/windows/Windows";

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
          <Route exact path="/Personal-Website" component={Window} />
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

    // <div className="App">
    //   <TextAnimation></TextAnimation>
    //   <MainScreen />
    // </div>
  }
}

export default App;
