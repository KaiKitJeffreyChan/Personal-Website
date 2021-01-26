import React, {useState} from 'react';
import { Navbar, Nav, FormControl, Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function MainNav() {
    
    return (
        <>
            <ParentContainer>
            </ParentContainer>
        </>
    )


}

const ParentContiner = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 20%;
  right: 2rem;
  bottom: 2rem;
  box-sizing: border-box; 
`

const ParentContinertwo = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 20%;
  top: 10rem;
  left: 2rem;
  box-sizing: border-box; 
`
export default MainNav;