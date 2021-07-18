import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./Clock";

const MainNav = () => {
  return (
    <>
      <ParentContainer>
        <Apple>
          <img
            alt="apple"
            src="https://img.icons8.com/metro/26/ffffff/mac-os.png"
            width="15px"
            height="15px"
          />
        </Apple>
        {/* <Current>
          <p style={{ fontSize: "15px" }}>Hello</p>  //add which element is currently selected
        </Current> */}
        <ClockStyle>
          <Clock></Clock>
        </ClockStyle>
        <Wifi>
          <img
            alt="wifi"
            src="https://img.icons8.com/android/24/ffffff/wifi.png"
            width="16px"
            height="16px"
          />
        </Wifi>
        <Sound>
          <img
            alt="sound"
            src="https://img.icons8.com/ios-filled/50/ffffff/room-sound.png"
            width="13px"
            height="13px"
          />
        </Sound>
      </ParentContainer>
    </>
  );
};
const ParentContainer = styled.div`
  background-color: rgba(0, 0, 0);
  height: 25px;
  opacity: 0.5;
`;
const Apple = styled.div`
  margin-left: 15px;
  padding-bottom: 10px;
  position: relative;
  float: left;
`;

// const Current = styled.div`
//   margin: 2px 0 0 10px;
//   float: left;
//   color: white;
// `;

const Wifi = styled.div`
  margin-right: 15px;
  float: right;
`;
const Sound = styled.div`
  margin-right: 15px;
  float: right;
`;

const ClockStyle = styled.div`
  float: right;
  margin: 3px 10px 0px 0px;
`;

export default MainNav;
