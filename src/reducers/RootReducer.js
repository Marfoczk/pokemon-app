import { combineReducers } from 'redux'
import PokemonListReducer from '../reducers/PokemonListReducer'
import PokemonMultipleReducer from './PokemonMultipleReducer';
import PokemonSecondReducer from './PokemonSecondReducer';

const RootReducer = combineReducers({
    pokemonList: PokemonListReducer,
    pokemon: PokemonMultipleReducer,
    pokemonSecond: PokemonSecondReducer
});

export default RootReducer