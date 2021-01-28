// import React, {useState, useEffect}  from 'react'
// import Draggable from 'react-draggable';
// import { Window, TitleBar, Text } from 'react-desktop/macOs';
// import styled from 'styled-components';

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

// function Terminal() {
//     const [size, setSize] = useState([window.innerHeight]);

//     var windowHeight = "500px";
//     var windowWidth = "400px";


//     const onCloseClick = () =>{
//         console.log("close window")
//     }
//     const onMinimizeClick = () =>{
//         console.log("minmize window")
//     }

//     const onMaximizeClick = () =>{
//         windowHeight = {height}
//         windowWidth = {width}
//         console.log("hi")
//     }

//     return (
//         <div>
//             <Draggable bounds="body">
//                 <TextBox>
//                     <Window
//                         height= {windowHeight}
//                         width = {windowWidth}
//                         padding="10px">
//                         <TitleBar
//                             title="My Projects"
//                             controls
//                             onCloseClick = {onCloseClick}
//                             onMinimizeClick={onMinimizeClick}
//                             onMaximizeClick={onMaximizeClick}
//                         />
                        
//                     </Window>
//                 </TextBox>
//             </Draggable>
//         </div>
//     )
// }


// const TextBox = styled.div`
//   position: absolute;
//   align-items: flex-start;
//   justify-content: flex-start;
//   top: 50%;
//   left: 15%;
// `

// export default Terminal
