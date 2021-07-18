import React from "react";
import styled from "styled-components";

const Windows = () => {
  return (
    <MacWindow id="main">
      <TopBarComponent>
        <RedCircle />
        <YellowCircle />
        <GreenCircle />
      </TopBarComponent>
    </MacWindow>
  );
};

const MacWindow = styled.div`
  height: 500px;
  width: 700px;
  background-color: rgb(36, 36, 36);
  border-radius: 7px;
  border: 1px solid grey;
`;

const TopBarComponent = styled.div`
  width: 100%;
  background-color: rgb(60, 60, 60);
  border-radius: 7px 7px 0 0;
  height: 2rem;
`;

const RedCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(255, 96, 92);
  margin-left: 15px;
  margin-top: 10px;
  float: left;
`;

const YellowCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(255, 189, 68);
  margin-left: 8px;
  margin-top: 10px;
  float: left;
`;

const GreenCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(0, 202, 78);
  margin-left: 8px;
  margin-top: 10px;
  float: left;
`;

export default Windows;
