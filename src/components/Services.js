import React from 'react';
// Styled Components
import styled from 'styled-components';
import { StyledAbout, StyledDescription, Hide, StyledImage } from '../styles';

const Services = () =>{
    return(
        <StyledServices>
            <StyledDescription>
                <h2>Some of the <span>skills</span> I have</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            {/* icon */}
                            <h3>JavaScript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione omnis ad, repudiandae adipisci perspiciatis fugit maiores quae quibusdam cumque alias harum dolore rem animi, iusto beatae blanditiis sapiente illo?</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            {/* icon */}
                            <h3>JavaScript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione omnis ad, repudiandae adipisci perspiciatis fugit maiores quae quibusdam cumque alias harum dolore rem animi, iusto beatae blanditiis sapiente illo?</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            {/* icon */}
                            <h3>JavaScript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione omnis ad, repudiandae adipisci perspiciatis fugit maiores quae quibusdam cumque alias harum dolore rem animi, iusto beatae blanditiis sapiente illo?</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            {/* icon */}
                            <h3>JavaScript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione omnis ad, repudiandae adipisci perspiciatis fugit maiores quae quibusdam cumque alias harum dolore rem animi, iusto beatae blanditiis sapiente illo?</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src="" alt="" />
            </StyledImage>
        </StyledServices>
    );
}

const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 3rem;
    }
    p{
        width: 70%;
        padding: 2rem 0;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
    }
`;

export default Services;
