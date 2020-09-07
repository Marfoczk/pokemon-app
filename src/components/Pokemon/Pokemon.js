import React, { useEffect } from 'react'
import _, { repeat } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { GetPokemon } from '../../actions/pokemonActions'
import { GetSecondPokemon } from '../../actions/pokemonActions'
import { colors } from './PokemonTypeColors'
import styled from 'styled-components'
import Loading from '../Loading/Loading'
import Tilt from 'react-tilt'
import noImage from '../../images/no-photos.svg'
 

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const StyledCard = styled(Tilt)`
    display: flex;
    flex-direction: column;
    width: 20rem;
    min-height: 500px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: -1px 5px 15px -5px rgba(0,0,0,0.3);
    text-align: center;
    
    p {
        padding: 1rem 0;
        margin: 1rem 2rem 2rem 2rem;
        font-style: italic;
        color: gray;
    }
`;  

const StyledSpan = styled.span`
    font-weight: bold;
    color: ${props => colors[props.type].bg};
`;

const StyledGradient = styled.div`
    position: relative;
    height: 150px;
    background-image: radial-gradient(circle at 33% 41%, rgba(250, 250, 250,0.03) 0%, rgba(250, 250, 250,0.03) 50%,rgba(37, 37, 37,0.03) 50%, rgba(37, 37, 37,0.03) 100%),radial-gradient(circle at 76% 49%, rgba(28, 28, 28,0.03) 0%, rgba(28, 28, 28,0.03) 50%,rgba(187, 187, 187,0.03) 50%, rgba(187, 187, 187,0.03) 100%),radial-gradient(circle at 41% 99%, rgba(247, 247, 247,0.03) 0%, rgba(247, 247, 247,0.03) 50%,rgba(120, 120, 120,0.03) 50%, rgba(120, 120, 120,0.03) 100%),radial-gradient(circle at 66% 27%, rgba(17, 17, 17,0.03) 0%, rgba(17, 17, 17,0.03) 50%,rgba(156, 156, 156,0.03) 50%, rgba(156, 156, 156,0.03) 100%),linear-gradient(73deg, rgb(209,209,209),rgb(88,88,88));
    margin-bottom: 2rem;

    
    img {
        z-index: 1000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: 100%;
    }
    
    &::before {
        z-index: 999;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => colors[props.type].bg};
        mix-blend-mode: screen;
        border-bottom: 1px solid rgba(0,0,0,0.5);
    }
`;

const StyledTags = styled.ul`
    margin-top: .2rem;
    display: flex;
    justify-content: space-evenly;;
    line-height: 16px;
    list-style: none;
`;

const StyledLi = styled.li`
    max-width: 7rem;
    width: 40%;
    height: 1.4rem;
    border-radius: 3px;
    background: ${props => colors[props.type].bg};
    color: ${props => colors[props.type].font};
    line-height: 1.4rem;
`;

const StyledStats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: auto;

    div {
        padding: 1.4rem 0;
        background: ${props => colors[props.type].bg};
        color: ${props => colors[props.type].font};
        border-right: 1px solid rgba(0,0,0,.2);

        &:last-child {
            border: none;
        }

        p {
            padding: 0;
            margin: 0;
            font-style: normal;
            text-transform: uppercase;
            color: ${props => colors[props.type].font};

            &:first-child {
                font-size: 2rem;
                font-weight: bold;
            }
        }
    }
`;

const Pokemon = (props) => {

    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.pokemon)
    const pokemonSecondState = useSelector(state => state.pokemonSecond)
    const pokemonName = props.match.params.pokemon;

    const pokemonData = pokemonState.data[pokemonName]
    const pokemonSecondData = pokemonSecondState.data[pokemonName]

    function toThree(num) {
        if (num < 10) return `#00${num}`
        if (num >= 10 && num <= 99) return `#0${num}`
        return `#${num}`
      }

    const options = {
        reverse:        false,  // reverse the tilt direction
        max:            15,     // max tilt rotation (degrees)
        perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          300,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           "X",   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    

    useEffect(()=>{
        dispatch(GetPokemon(pokemonName))
        dispatch(GetSecondPokemon(pokemonName))
    }, [pokemonName])

    return (
        <>
            {pokemonState.error ? <p>Error</p> : null}
            {/* {(pokemonState.loading && pokemonSecondState.loading) == true ? <Loading/> : */}
            {pokemonState.loading ? <Loading/> :
                <StyledWrapper>
                    {!_.isEmpty(pokemonData) ?
                    <StyledCard options={options}>
                        <StyledGradient type={pokemonData.types[0].type.name}>
                            <img src={pokemonData.sprites.front_default ? pokemonData.sprites.front_default : noImage} alt="pokemon_image"/>
                        </StyledGradient>
                        <StyledSpan type={pokemonData.types[0].type.name}>{toThree(pokemonData.id)}</StyledSpan>
                        <h1 style={{textTransform: 'capitalize'}}>{pokemonName}</h1>
                        <StyledTags>
                            {pokemonData.types.map((item, i) => (
                                <StyledLi key={i} type={item.type.name}>{item.type.name}</StyledLi>
                            ))}
                        </StyledTags>
                            <div style={{display: 'flex', marginTop: '2rem'}}>
                               <img style={{width: '25%'}} src={pokemonData.sprites.front_default}></img> 
                               <img style={{width: '25%'}} src={pokemonData.sprites.back_default}></img> 
                               <img style={{width: '25%'}} src={pokemonData.sprites.front_shiny}></img> 
                               <img style={{width: '25%'}} src={pokemonData.sprites.back_shiny}></img> 
                            </div>
                            {!pokemonSecondState.loading && !_.isEmpty(pokemonSecondData) 
                            ? <p> {pokemonSecondData[0].description} </p> 
                            : null}
                        <StyledStats type={pokemonData.types[0].type.name}>
                                <div>
                                    <p>{pokemonData.stats[0].base_stat}</p>
                                    <p>{pokemonData.stats[0].stat.name}</p>
                                </div>
                                <div>
                                    <p>{pokemonData.stats[1].base_stat}</p>
                                    <p>{pokemonData.stats[1].stat.name}</p>
                                </div>
                                <div>
                                    <p>{pokemonData.stats[2].base_stat}</p>
                                    <p>{pokemonData.stats[2].stat.name}</p>
                                </div>
                        </StyledStats>
                    </StyledCard>
                    : null}
                    {/* <button onClick={()=>console.log(pokemonData)}></button> */}
                    <button style={{height: '25px'}} onClick={()=>console.log(pokemonData.sprites)}></button>
                    {/* <button style={{height: '25px'}}  onClick={()=>console.log(pokemonSecondData[0].description)}></button> */}
                </StyledWrapper>
            }
        </>
    )
}

export default Pokemon