import { func } from "prop-types";
import { DELETE_FAV, GET_FAV } from "../actions/types.js";

const initialState = {
    pokemon: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_FAV:
            return {
                ...state,
                pokemon: action.payload
            };
        case DELETE_FAV:
            return {
                ...state,
                pokemon: state.pokemon.filter(pokemon => pokemon.id !== action.payload)
            }
        default:
            return state;
    }
}