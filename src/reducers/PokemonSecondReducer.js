const initialState = {
    loading: false,
    data: {},
    error: '',
}

const PokemonSecondReducer = (state = initialState, action) => {
    switch(action.type) {
        case "POKEMON_SECOND_LOADING":
            return {
                ...state, 
                loading: true,
                error: ''
            }
        case "POKEMON_SECOND_SUCCES":
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                }
            }
        case "POKEMON_SECOND_FAILURE":
            return {
                ...state,
                loading: false,
                error: 'errror unable to find pokemon'
            }
        default:
            return state
    }
}

export default PokemonSecondReducer