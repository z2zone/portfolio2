import React from 'react';
import About from '../components/About';
import Works from '../components/Works';
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
            <Works/>
        </motion.div>
    );
}

export default Main;