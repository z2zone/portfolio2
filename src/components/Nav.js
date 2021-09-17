import React from 'react';
//Styled Component
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">Chotime</Link></h1>
            <ul>
                {/* <li>
                    <Link to="/experience">Experience</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{width:"0%"}}
                        animate={{width: pathname === '/' ? "50%" : "0%" }}
                    />
                </li> */}
                <li>
                    <Link to="/projects">Projects</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{width:"0%"}}
                        animate={{width: pathname === '/projects' ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/reachmeout">Reach me out</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{width:"0%"}}
                        animate={{width: pathname === '/reachmeout' ? "50%" : "0%" }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 9vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color: #fff;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    #logo{
        font-size: 1.8rem;
        font-weight: lighter;
        font-family: 'Dancing Script', cursive;
    }
`;

const Line = styled(motion.div)`
    height: 0.15rem;
    background: #20b981;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
`;
export default Nav;