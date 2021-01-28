import React, {useState, useEffect} from 'react'
import "./MainScreen.css";
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  MainNav from "./components/Navbar";
import image from "./pictures/bg.jpg";
import Bottom from './components/Bottom';
import ProjectConent from './components/ProjectsContent';
import EmailContent from "./components/EmailContent";
import {MyProjectWindow, MyEmailWindow} from "./components/DraggableBox";

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
    const [appear, setAppear] = useState(false);
    const toggleAppear = () => setAppear(!appear)

    return (
        <>
            <Router>
                <MainNav>
                    <Switch>
   
                    </Switch>
                </MainNav>
            </Router>
            
            <img src={image} width={width} height={height-25}/>
            
            <EmailBox>
                <button onClick = {toggleAppear}> YOO </button>
            </EmailBox>

   
            <div>
            {appear ? <MyProjectWindow/> : null}
            </div>
            
            
            <MyEmailWindow/>
            
            <Bottom></Bottom>
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


const EmailBox = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 30%;
  left: 15%;


`

export default MainScreen;



// import React, {useState, useEffect} from 'react'
// import "./MainScreen.css";
// import styled from 'styled-components';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import  MainNav from "./components/Navbar";
// import image from "./pictures/bg.jpg";
// import { Window, TitleBar, Text } from 'react-desktop/macOs';
// import Bottom from './components/Bottom';
// import Draggable from 'react-draggable';
// import ProjectConent from './components/ProjectsContent';



// function useWindowSize() {
    
//     const [size, setSize] = useState([window.innerHeight]);
//     useEffect(() => {
//         const handleResize = () => {
//             setSize([window.innerHeight, window.innerWidth])
//         }
//         window.addEventListener("resize", handleResize)
//     }, [])
//     return size;
// }

// export default class MainScreen extends Component {

//     size = useWindowSize();
//     height = size[0];
//     width = size[1];

//     onCloseClick = () =>{
//         console.log("close window")
//     }
//     onMinimizeClick = () =>{
//         console.log("minmize window")
//     }

//     onMaximizeClick = () =>{
//         windowHeight = {height}
//         windowWidth = {width}
//         console.log("hi")
//     }

//     return (){
//         <>
//         <Router>
//             <MainNav>
//                 <Switch>

//                 </Switch>
//             </MainNav>
//         </Router>

        
//         <div>
//         <img src={image} width={width} height={height-25}/>
//         <Draggable bounds="body">
//             <TextBox>
//                 <Window
                    
//                     height= {windowHeight}
//                     width = {windowWidth}
//                     padding="10px">
//                     <TitleBar
//                         title="My Projects"
//                         controls
//                         onCloseClick = {onCloseClick}
//                         onMinimizeClick={onMinimizeClick}
//                         onMaximizeClick={onMaximizeClick}
//                     />
//                     <ProjectConent>
//                     </ProjectConent>
//                 </Window>
//             </TextBox>
//         </Draggable>
//         </div>
//         <Bottom></Bottom>
//     </>
//     }

// }

// const MainText = styled.div`
//   position: absolute;
//   align-items: flex-start;
//   justify-content: flex-start;
//   top: 20%;
//   left: 15%;
// `

// const TextBox = styled.div`
//   position: absolute;
//   align-items: flex-start;
//   justify-content: flex-start;
//   top: 50%;
//   left: 15%;
// `

