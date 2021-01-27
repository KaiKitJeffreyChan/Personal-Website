import React, { Component } from 'react';
import './App.css';
import MainScreen from "./MainScreen";
import TextAnimation from "./components/TextAnimation";

class App extends Component {
  render() {
    return (
      <div className = "App">
        <TextAnimation>
        </TextAnimation>
        <MainScreen/>
      </div>
    );
  }
}


export default App;
