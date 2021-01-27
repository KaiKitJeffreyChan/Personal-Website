import React, {useState, useEffect} from 'react'
import "./MainScreen.css";
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  MainNav from "./components/Navbar";
import image from "./pictures/bg.jpg";

import Bottom from './components/Bottom';
import TextAnimation from "./components/TextAnimation";
import ClassClick from "./components/ClassClick";


function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener("resize", handleResize)
    }, [])
    return size;
}

function MainScreen () {
    const [height, width] = useWindowSize();
    return (
        <>
        <ClassClick>

        </ClassClick>
            <Router>
                <MainNav>
                    <Switch>
                        
                    </Switch>
                </MainNav>
            </Router>
         
            <Bottom></Bottom>

            <img src={image} width={width} height={height-25}/>

        </>
    );
}

const MainText = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 20%;
  left: 15%;
`

const TextBox = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 50%;
  left: 15%;

`

export default MainScreen;