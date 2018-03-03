import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'
import {testMiddleware} from "./middleware/testMiddleware";
import Root from './components/root'

let middleware = [thunkMiddleware, logger, testMiddleware];
const defaultStore = {};
const store = createStore(reducers, defaultStore, applyMiddleware(...middleware));

ReactDOM.render(
    <AppContainer>
        <Root store={store}  />
    </AppContainer>,
    document.getElementById("root")
);