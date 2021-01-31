import React, { useState } from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import styled from 'styled-components';
import Draggable from 'react-draggable';

function TerminalLine() {
    
  const [terminalLineData, setTerminalLineData] = useState([
    {type: LineType.Output, value: 'Here are some things about me'},
    {type: LineType.Input, value: 'Some previous input received'},
  ]);

  return (
    <Draggable bounds="body">
        <TextBox>
          
        </TextBox>
    </Draggable>   
     )
}

const TextBox = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 5%;
  left: 0%;
`

export default TerminalLine;
