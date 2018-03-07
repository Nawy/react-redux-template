import React, { Component } from 'react';

const App = (props) => (
    <p>
        Counter: {props.counter} <button onClick={props.incrementCounter}>Increase</button>
    </p>
);

export default App;