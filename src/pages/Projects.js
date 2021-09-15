import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Gourmet from '../img/project1.png';
import DAG from '../img/project2.png';

const Projects = () => {
    return(
        <StyledProjects>
            <StyledProject>
                <h2>Montreal Gourmet</h2>
                <div className="line"></div>
                <Link>
                    <img src={Gourmet} alt="" />
                </Link>
            </StyledProject>
            <StyledProject>
                <h2>Montreal Gourmet</h2>
                <div className="line"></div>
                <Link>
                    <img src={DAG} alt="" />
                </Link>
            </StyledProject>
        </StyledProjects>
    );
}

const StyledProjects = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledProject = styled.div`
    padding-bottom: 10rem;
    text-align: center;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 50%;
        height: 50vh;
        object-fit: cover;
    }
`;
export default Projects;