import React from 'react';
import img1 from '../img/test1.jpg';
import Wave from './Wave';

// Styled Components
// import styled from 'styled-components';
import { StyledAbout, StyledDescription, Hide, StyledImage } from '../styles';

// Animation
import { motion } from 'framer-motion';
import { titleAnimation, fadeAnimation, photoAnimation } from '../pages/aminations';

const About = () =>{
    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Hello My name is</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}><span>Brandon Cho</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Roast me</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeAnimation}>
                    Hello there, my name is Brandon and I am a person with real passion for development and design of applications. I aim for more than just nice looking websites; I want to build exceptional digital projects with solid strategy and background knowledge. I enjoy learning new and powerful technologies that can expand my horizon.
                </motion.p>
                <motion.button className="main-button">Look around</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnimation} src={img1} alt="" />
            </StyledImage>
            <Wave/>
        </StyledAbout>
    );
}

export default About;

