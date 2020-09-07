import axios from 'axios'

export const GetPokemonList = (page) => dispatch => {
    const perPage = 15;
    const offset = (page * perPage) - perPage;

    dispatch({
        type: "POKEMON_LIST_LOADING",
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)
    .then(response => {
        dispatch({
            type: "POKEMON_LIST_SUCCES",
            payload: response.data
        })
    })
    .catch(error => {
        dispatch({ 
            type: "POKEMON_LIST_FAILURE",
        })
    })
}

export const GetPokemon = (pokemon) => async dispatch => {
    try{
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING"
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        
        dispatch({
            type: "POKEMON_MULTIPLE_SUCCES",
            payload: res.data,
            pokemonName: pokemon
        })
    } catch(err) {
        dispatch({
            type: "POKEMON_MULTIPLE_FAILURE",
        })
    }
}

export const GetSecondPokemon = (pokemon) => async dispatch => {
    try{
        dispatch({
            type: "POKEMON_SECOND_LOADING"
        });

        const res = await axios.get(`http://cors-anywhere.herokuapp.com/https://pokeapi.glitch.me/v1/pokemon/${pokemon}`)
        
        dispatch({
            type: "POKEMON_SECOND_SUCCES",
            payload: res.data,
            pokemonName: pokemon
        })
    } catch(err) {
        dispatch({
            type: "POKEMON_SECOND_FAILURE",
        })
    }
}