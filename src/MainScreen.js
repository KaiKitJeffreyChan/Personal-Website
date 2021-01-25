import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  MainNav from "./components/Navbar";
import image from "./pictures/bg.jpg";


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
                <MainNav style={{ opacity: "0.1" }}>
                <Switch>
                    
                </Switch>
                </MainNav>
            </Router>

            <img src={image} width={width} height={height-25}/>

            {Hub.map((hub) => {
            return (

                <BottomBar >
                    
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




export default MainScreen;