import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  MainNav from "./components/Navbar";
import image from "./pictures/bg.jpg";
import { Button, Tooltip } from '@material-ui/core';
import Typical from 'react-typical'


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
        <div className="Background">
            <Router>
                <MainNav>
                <Switch>
                    
                </Switch>
                </MainNav>
            </Router>
            

            <img src={image} width={width} height={height-25}/>
            
            
            {Hub.map((hub) => {
            return (

                <BottomBar>
                    <Tooltip disableAutoFocus={true} title="Finder">
                        <Button>
                            <Icon1>
                                <img src="https://img.icons8.com/color/512/ffffff/mac-logo.png"/>
                            </Icon1>
                        </Button>
                    </Tooltip>
                    <Tooltip title="GitHub">
                        <Button target="_blank" href="https://github.com/KaiKitJeffreyChan">
                            <Icon2>
                                <img src="https://img.icons8.com/fluent/500/ffffff/github.png"/>
                            </Icon2>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Email">
                        <Button>
                            <Icon3>
                                <img src="https://img.icons8.com/fluent/500/ffffff/gmail--v1.png"/>
                            </Icon3>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Linkedin">
                        <Button target="_blank" href="https://www.linkedin.com/in/jeffrey-chan-9974711ab/"> 
                            <Icon4>
                                <img src="https://img.icons8.com/fluent/500/ffffff/linkedin.png"/>
                            </Icon4>    
                        </Button>
                    </Tooltip>
                    <Tooltip title="About Me">
                        <Button>
                            <Icon5>
                                <img src="https://img.icons8.com/office/400/ffffff/console.png"/>
                            </Icon5>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Spotify">
                        <Button>
                            <Icon6>
                                <img src="https://img.icons8.com/fluent/500/ffffff/spotify.png"/>
                            </Icon6>
                        </Button>
                    </Tooltip>
                </BottomBar>

                )
            })
            }
        </div>
        </>
    );
    
}
const Hub =[
    {

  }
];

const BottomBar = styled.div`
  position: fixed;
  display: flex;
  width: 50%;
  height: 55px;
  bottom:0px;
  border-radius: 6px 6px 0 0;
  background: #666666;
  opacity: 0.8;
  box-sizing: border-box; 
  margin-left:auto;
  left: 25%;
  justify-content: center;
`

const Icon1 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  right: 5%;
  width: 45px;
  height: 45px;
  border-radius: 7px;

`
const Icon2 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  right: 3%;
  width: 45px;
  height: 45px;
  border-radius: 7px;

`
const Icon3 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  left: -1%;
  width: 45px;
  height: 45px;
  border-radius: 7px;

`
const Icon4 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  left: 1%;
  width: 45px;
  height: 45px;
  border-radius: 7px;

`
const Icon5 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  left: 3%;
  width: 45px;
  height: 45px;
  border-radius: 7px;
 
`
const Icon6 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  left: 5%;
  width: 45px;
  height: 45px;
  border-radius: 7px;

`

const MainText = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 20%;
  left: 15%;

`


export default MainScreen;