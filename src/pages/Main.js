import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
// Animations
import { motion } from 'framer-motion';
import { mainAnimation } from './aminations';

const Main = () => {
    return(
        <motion.div
            variants={mainAnimation} 
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <About/>
            <Skills/>
        </motion.div>
    );
}

export default Main;