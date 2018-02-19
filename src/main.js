import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router'
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
    <AppContainer>
        <Router />
    </AppContainer>,
    document.getElementById("root")
);