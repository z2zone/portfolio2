import React from 'react';
import img1 from '../img/test1.jpg';
// Styled Components
import styled from 'styled-components';
import { StyledAbout, StyledDescription, Hide, StyledImage } from '../styles';

const About = () =>{
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="jumbo-title">
                    <Hide>
                        <h2>Hello My name is</h2>
                    </Hide>
                    <Hide>
                        <h2><span>Brandon Cho</span></h2>
                    </Hide>
                    <Hide>
                        <h2>Roast me</h2>
                    </Hide>
                </div>
                <p>
                    Hello thank you for visiting my page. This is a demo project, revamping my portfolio website using React.
                </p>
                <button className="main-button">Look around</button>
            </StyledDescription>
            <StyledImage>
                <img src={img1} alt="" />
            </StyledImage>
        </StyledAbout>
    );
}

//Styled Components


export default About;