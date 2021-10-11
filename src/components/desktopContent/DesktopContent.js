import React from 'react'
import Typewriter from 'typewriter-effect';
import styled from "styled-components";
import "./DesktopContent.css"

const DesktopContent = () => {
    return (
        <div className="desktop">
            <Title>Hi, My Name Is Jeffrey Chan</Title>
            <TypeWriterCss>
                <h5>
                    <Typewriter
                        options={{
                            strings: ['Problem Solver', 'Creative', "I think lol", 'Enthusiastic', 'Innovative', 'Gamer'],
                            autoStart: true,
                            loop: true,

                        }}
                    />
                </h5>

            </TypeWriterCss>

        </div>
    )
}

const Title = styled.h1`
    padding-left: 5%;
    padding-top: 5%;
    /* position: absolute;
    top: 10px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display:block; */
`

const TypeWriterCss = styled.div`
padding-left: 5%;

`


export default DesktopContent
