import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">Chotime</Link></h1>
            <ul>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/reachmeout">Reach me out</Link></li>
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
export default Nav;