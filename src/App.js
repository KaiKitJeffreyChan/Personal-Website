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
        <h3> HI, MY NAME IS JEFFREY CHAN </h3>
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

const MainText = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 20%;
  left: 15%;

`

export default App;
