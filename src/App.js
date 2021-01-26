import React, { Component } from 'react';
import './App.css';
import MainScreen from "./MainScreen";
import Typical from 'react-typical';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <MainText>
        <strong><h2> HI, MY NAME IS JEFFREY CHAN </h2></strong>
            <p>
                <Typical
                    loop = {Infinity}
                    wrapper ="b"
                    steps={[
                        "Computer Science Student",
                        1500,
                        "Aspiring Web Developer",
                        1500,
                        "Gamer",
                        1500,
                        "Problem Solver",
                        1500,
                        "Purchases Usless Things",
                        1500
                    ]
                    }
                />
            </p>
        </MainText>
        <MainScreen/>
      </div>
    );
  }
}

const MainText = styled.header`
  position: absolute;
  box-sizing: border-box; 
  width: 50%;
  margin-left:auto;
  left: 25%;
  top: 20%;
  justify-content: center;


`


export default App;
