import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'
import logo from '../../images/logo.svg'


const StyledNav = styled.nav`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 900px) {
            flex-direction: column;
        }

    img {
        width: 50%;

        @media (max-width: 900px) {
            width: 100%;
        }
    }
`;

const StyledForm = styled.form`
    margin-left: auto;
    align-self: center;
`;



const Navbar = (props) => {

    const [pokemon, setPokemon] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        props.history.push(`/pokemon/${pokemon.toLowerCase()}`)
        setPokemon('')
    }

    return (
        <StyledNav>
            <Link to={"/"}><img src={logo} alt="logo"/></Link>

            <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField label="Search Pokemon" value={pokemon} onChange={e => setPokemon(e.target.value)} />
                <IconButton color="primary" style={{marginTop: '5px'}} type="submit">
                    <SearchIcon color="primary" />
                </IconButton>
            </StyledForm>

        </StyledNav>
    )
}

export default withRouter(Navbar)
