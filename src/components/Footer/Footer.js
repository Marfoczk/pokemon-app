import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    margin-top: 1rem;
    width: 100%;
    height: 1rem;
    text-align: right;
`;

const Footer = () => {
    return (
        <StyledFooter>
            Thanks to <a href="https://pokedevs.gitbook.io/">Pokédex API</a> and <a href="https://pokeapi.co/">PokeAPI.co</a>
        </StyledFooter>
    )   
}

export default Footer
