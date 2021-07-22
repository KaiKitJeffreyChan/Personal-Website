import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tooltip } from "@material-ui/core";
import styled from "styled-components";
import finder from "./bottomIcons/mac-logo.png";

//import all images before using dont use links
const Bottom = (props) => {
  return (
    <BottomBar>
      <Tooltip title="My Projects">
        <Button onClick={props.toggleProject}>
          <Icon1>
            <img alt="Finder" src={finder} />
          </Icon1>
        </Button>
      </Tooltip>
      <Tooltip title="GitHub">
        <Button target="_blank" href="https://github.com/KaiKitJeffreyChan">
          <Icon2>
            <img
              alt="Github"
              src="https://img.icons8.com/fluent/500/ffffff/github.png"
            />
          </Icon2>
        </Button>
      </Tooltip>
      <Tooltip title="Email">
        <Button onClick={props.toggleEmail}>
          <Icon3>
            <img
              alt="Gmail"
              src="https://img.icons8.com/fluent/500/ffffff/gmail--v1.png"
            />
          </Icon3>
        </Button>
      </Tooltip>
      <Tooltip title="Linkedin">
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/jeffrey-chan-9974711ab/"
        >
          <Icon4>
            <img
              alt="Linkedin"
              src="https://img.icons8.com/fluent/500/ffffff/linkedin.png"
            />
          </Icon4>
        </Button>
      </Tooltip>
      <Tooltip title="About Me">
        <Button>
          <Icon5>
            <img
              alt="Terminal"
              src="https://img.icons8.com/office/400/ffffff/console.png"
            />
          </Icon5>
        </Button>
      </Tooltip>
      <Tooltip title="Spotify">
        <Button>
          <Icon6>
            <img
              alt="Spotify"
              src="https://img.icons8.com/fluent/500/ffffff/spotify.png"
            />
          </Icon6>
        </Button>
      </Tooltip>
    </BottomBar>
  );
};

const BottomBar = styled.div`
  text-align: center;
  position: fixed;
  width: 500px;
  left: 50%;
  height: 55px;
  bottom: 0px;
  border-radius: 6px 6px 0 0;
  background: #666666;
  opacity: 0.8;
  box-sizing: border-box;
  justify-content: flex-start;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;

const Icon1 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;

  width: 45px;
  height: 45px;
  border-radius: 7px;
`;
const Icon2 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  right: 3%;
  width: 45px;
  height: 45px;
  border-radius: 7px;
`;
const Icon3 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  left: -1%;
  width: 45px;
  height: 45px;
  border-radius: 7px;
`;
const Icon4 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  left: 1%;
  width: 45px;
  height: 45px;
  border-radius: 7px;
`;
const Icon5 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  left: 3%;
  width: 45px;
  height: 45px;
  border-radius: 7px;
`;
const Icon6 = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  left: 5%;
  width: 45px;
  height: 45px;
  border-radius: 7px;
`;
export default Bottom;
