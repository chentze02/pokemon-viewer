import React, { useEffect } from 'react'
import { Outlet, Navigate} from "react-router-dom"
import {connect} from "prop-types"
import PokeList from '../main/PokeList'
import { useSelector } from 'react-redux';
import store from '../../store';

const PrivateRoute = () => {

    const auth = useSelector((store) => store.auth)

    useEffect(() => {
        console.log(auth)
    }, [])

    return(
        auth.isAuthenticated ? <Outlet />  : <Navigate to="/login" />
        // <Route
        //     {...rest}
        //     render={props => {
        //         if(auth.isLoading){
        //             return <h2>Loading...</h2>
        //         } else if(!auth.isAuthenticated){
        //             return <Navigate to="/login" />;
        //         } else{
        //             return <Component {...props} />;

        //         }
        //     }}
        // />
  )
}

export default PrivateRoute;