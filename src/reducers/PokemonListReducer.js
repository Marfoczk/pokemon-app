const initialState = {
    loading: false,
    data: [],
    err: '',
    count: 0,
}

const PokemonListReducer = (state = initialState, action) => {
    switch(action.type){
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading: true
            }
        case "POKEMON_LIST_SUCCES":
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                count: action.payload.count,
            }
        case "POKEMON_LIST_FAILURE":
            return {
                ...state,
                loading: false,
                err: 'error'
            }
        default:
            return state
    }
}

export default PokemonListReducer