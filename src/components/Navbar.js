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
                <img src="https://img.icons8.com/metro/26/ffffff/mac-os.png" width="15px" height="15px" />
                
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Clock>
                    
                </Clock>
                
            </Navbar.Collapse>
        </Navbar>
        </ParentContiner>
        </>
    )
}

const ParentContiner = styled.div`
  background-color: rgba(0,0,0, 0.7);
`


export default MainNav;