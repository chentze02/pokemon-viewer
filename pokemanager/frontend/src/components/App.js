import React, { useEffect } from "react";
import * as ReactDOMClient from 'react-dom/client';
import Header from "./layout/Header";
import PokeList from "./main/PokeList";
import {Provider} from 'react-redux';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import store from '../store'
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import { LoginHeader } from "./layout/LoginHeader";
import PrivateRoute from "./private/PrivateRoute";
import { loadUser } from "../actions/auth";
import Favourite from "./main/Favourite";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    // const store = Store();

    return(
        <div>
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                    {...alertOptions}>
                    <Router>
                    <LoginHeader/>
                    <Alerts></Alerts>
                        <Routes>
                            <Route exact path="/" element={<PrivateRoute />}>
                                <Route element={<PokeList />} path="/" exact/>
                                <Route element={<Favourite/>} path="/favourite" exact/>
                            </Route>
                            <Route exact path="/register" element={<Register/>}/>
                            <Route exact path="/login" element={<Login/>}/>
                        </Routes>
                    </Router>
                </AlertProvider>
            </Provider>
        </div>
    )
}
const container = document.getElementById('app');
// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App/>);
