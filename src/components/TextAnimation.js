import React from "react";
import Typical from "react-typical";
import styled from "styled-components";

function TextAnimation() {
  return (
    // <MainText>
    //   <strong>
    //     <h2> HI, MY NAME IS JEFFREY CHAN </h2>
    //   </strong>

    <Typical
      steps={[
        "Computer Science Student",
        1500,
        "Aspiring Web Developer",
        1500,
        "Gamer",
        1500,
        "Problem Solver",
        1500,
        "Food Connoisseur",
        1500,
      ]}
      loop={Infinity}
      wrapper="b"
    />
    // </MainText>
  );
}

const MainText = styled.header`
  position: absolute;
  box-sizing: border-box;
  width: 50%;
  margin-left: auto;
  left: 25%;
  top: 20%;
  justify-content: center;
`;

export default TextAnimation;
