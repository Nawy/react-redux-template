import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'
import {testMiddleware} from "./middleware/testMiddleware";
import Root from './components/root'

let middleware = [thunkMiddleware, logger, testMiddleware];
const defaultStore = {counter: 0};
const store = createStore(reducers, defaultStore, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <Root />
        </AppContainer>
    </Provider>,
    document.getElementById("root")
);