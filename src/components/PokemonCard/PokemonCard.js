import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledSpan = styled.span`
    text-transform: capitalize;
    margin-left: 1rem;
`;

const StyledLink = styled(Link)`
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    height: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in 0s;

    &:hover{
        background-color: #3B5DA8;
        color: white;
    }
`;

const PokemonCard = ({ data }) => {
    return (
        <StyledLink to={`/pokemon/${data.name}`}>
            <StyledSpan>{data.name}</StyledSpan>
        </StyledLink>
    )
}

export default PokemonCard
