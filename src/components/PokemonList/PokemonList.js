import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from "lodash"
import Pagination from '@material-ui/lab/Pagination';
import PokemonCard from '../PokemonCard/PokemonCard'
import { GetPokemonList } from '../../actions/pokemonActions'
import styled from 'styled-components'
import Loading from '../Loading/Loading'


const StyledH2 = styled.h2`
    padding: 1rem 0;
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
`;

const StyledPagination = styled(Pagination)`
    align-self: center;
`;

const PokemonList = () => {

    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)

    useEffect(() => {
        dispatch(GetPokemonList(1))
    }, [])


    return (
        <>
            {pokemonList.loading ? <Loading/> : null}
            <StyledH2>Pokemon list</StyledH2>
            <StyledUl>
                {!_.isEmpty(pokemonList.data) ? pokemonList.data.map((elem,index) => (
                    <PokemonCard key={index} data={elem}/>
                )) : null}
            </StyledUl>
            {/* {!_.isEmpty(pokemonList.data) ?
                <ReactPaginate 
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={(e) => dispatch(GetPokemonList(e.selected + 1))}
                />
                : null
            } */}

            <StyledPagination 
            color="primary"
            style={{marginBottom: "2rem", marginTop: "2rem"}}
            count={Math.ceil(pokemonList.count / 15)} 
            onChange={(event, value) => dispatch(GetPokemonList(value))}
            />

        </>
    )
}

export default PokemonList
