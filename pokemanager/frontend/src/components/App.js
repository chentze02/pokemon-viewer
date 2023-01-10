import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import Header from "./layout/Header";
import PokeList from "./main/PokeList";
import {Provider} from 'react-redux';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import store from '../store'
import Favourite from "./main/Favourite";
import Alerts from "./layout/Alerts";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

const App = () => {
    return(
        <div>
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                    {...alertOptions}>
                    <Alerts></Alerts>
                    <PokeList></PokeList>
                    <Favourite></Favourite>
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
