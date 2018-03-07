import React, { Component } from 'react';

const App = (props) => {
    console.log(props);
    return (
        <p>
            Counter: {props.counter} <button onClick={props.incrementCounter}>Increase</button>
        </p>
    );
};

export default App;