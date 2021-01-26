import React, {useState} from 'react';
import styled from 'styled-components';
import { Navbar, Nav, FormControl, Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Clock from "./Clock";

function MainNav() {
    
    return (
        <>
        <ParentContiner>

        
        <Navbar bg="darkgrey" variant="dark" style={{
            height: "25px"
        }}>
            <Navbar.Brand href="#home">
                <Apple>
                    <img src="https://img.icons8.com/metro/26/ffffff/mac-os.png" width="15px" height="15px" />
                </Apple>
                
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Wifi>
                    <img src="https://img.icons8.com/android/24/ffffff/wifi.png" width="16px" height="16px"/>
                </Wifi>
                    
                <Sound>
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/room-sound.png" width="13px" height="13px"/> 
                </Sound>
                
                <Clock>
                </Clock>
                
            </Navbar.Collapse>
        </Navbar>
        </ParentContiner>
        </>
    )
}
const ParentContiner = styled.div`
  background-color: rgba(0,0,0);
  opacity: 0.70;
`
const Apple = styled.div`

  padding-bottom: 0.3rem;
`
const Wifi = styled.div`
  padding-right: 0.6rem;
  padding-bottom: 0.2rem;
`
const Sound = styled.div`
  padding-right: 0.5rem;
  padding-bottom: 0.2rem
`



export default MainNav;