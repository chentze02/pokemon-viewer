import axios from 'axios'
import { DELETE_FAV, GET_FAV, ADD_FAV } from './types'
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

//GET_FAV
export const getFavouritePoke = () => (dispatch, getState) => {
    axios.get('/api/pokemon/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_FAV,
                payload: res.data
            });
        })
        .catch(err =>  dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE_FAV
export const delFavouritePoke = (id) => (dispatch, getState)  => {
    axios.delete(`/api/pokemon/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deletePoke: "Delete Favourite"}));
            dispatch({
                type: DELETE_FAV,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

//ADD
export const addFavouritePoke = (pokemon) => (dispatch, getState) => {
    axios.post(`/api/pokemon/`, pokemon, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deletePoke: "Added to Favourites"}));
            dispatch({
                type: ADD_FAV,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}