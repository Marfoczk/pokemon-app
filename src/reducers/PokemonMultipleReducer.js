const initialState = {
    loading: false,
    data: {},
    error: '',
}

const PokemonMultipleReducer = (state = initialState, action) => {
    switch(action.type) {
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state, 
                loading: true,
                error: ''
            }
        case "POKEMON_MULTIPLE_SUCCES":
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                }
            }
        case "POKEMON_MULTIPLE_FAILURE":
            return {
                ...state,
                loading: false,
                error: 'errror unable to find pokemon'
            }
        default:
            return state
    }
}

export default PokemonMultipleReducer