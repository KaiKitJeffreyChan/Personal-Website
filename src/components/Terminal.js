import React, { useState } from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import styled from 'styled-components';

function TerminalLine() {
    
  const [terminalLineData, setTerminalLineData] = useState([
    {type: LineType.Output, value: 'Welcome to the React Terminal UI Demo!'},
    {type: LineType.Input, value: 'Some previous input received'},
  ]);

  return (
      <div>
          <Terminal name='React Terminal Usage Example' colorMode={ ColorMode.Light }  lineData={ terminalLineData } onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }/>
      </div>
     )
}

const TextBox = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 50%;
  left: 15%;
`

export default TerminalLine;
