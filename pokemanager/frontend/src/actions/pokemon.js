import axios from 'axios'
import { DELETE_FAV, GET_FAV, ADD_FAV } from './types'
import { createMessage } from './messages';

//GET_FAV
export const getFavouritePoke = () => dispatch => {
    axios.get('/api/pokemon/')
        .then(res => {
            dispatch({
                type: GET_FAV,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

//DELETE_FAV
export const delFavouritePoke = () => dispatch => {
    axios.delete(`/api/pokemon/${id}`)
        .then(res => {
            dispatch(createMessage({deletePoke: "Added Favourite"}));
            dispatch({
                type: DELETE_FAV,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

//ADD
export const addFavouritePoke = () => dispatch => {
    axios.post(`/api/pokemon/`)
        .then(res => {
            dispatch({
                type: ADD_FAV,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}