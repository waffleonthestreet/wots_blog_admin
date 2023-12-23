import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {store, persister} from "./store";
import {AuthProvider} from "./contexts/JWTContext.js";
import {BrowserRouter} from "react-router-dom";


const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <Provider store={store}>
        <AuthProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </React.StrictMode>
        </AuthProvider>
    </Provider>,
);