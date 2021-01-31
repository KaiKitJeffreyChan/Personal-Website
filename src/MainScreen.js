import React, {useState, useEffect} from 'react'
import "./MainScreen.css";
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  MainNav from "./components/Navbar";
import image from "./pictures/bg.jpg";
import Bottom from './components/Bottom';
import ProjectConent from './components/ProjectsContent';
import EmailContent from "./components/EmailContent";
import MyProjectWindow from "./components/Projects";
import MyEmailWindow from "./components/Email";
import TerminalLine from "./components/Terminal";

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
    const [Project, setProject] = useState(false);
    const toggleProject = () => setProject(!Project)

    const [Email, setEmail] = useState(false);
    const toggleEmail = () => setEmail(!Email)

    return (
        <>
            <Router>
                <MainNav>
                    <Switch>
   
                    </Switch>
                </MainNav>
            </Router>

            
            <img src={image} width={width} height={height-25}/>

            {Project ? <MyProjectWindow toggleProject={toggleProject} /> : null}

            {Email ? <MyEmailWindow toggleEmail={toggleEmail} /> : null}

            <MainText>
                <TerminalLine/>
            </MainText>
            <TerminalLine>
                
            </TerminalLine>


            <Bottom toggleProject={toggleProject} toggleEmail={toggleEmail}/>
        </>
    );
}

const MainText = styled.div`
  top: 0%;
  left: 0%;
`

const EmailBox = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 30%;
  left: 15%;
`
export default MainScreen