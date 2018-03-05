import React, { Component } from 'react';

const Root = (props) => (
    <p>
        Counter: {props.counter} <button onClick={incrementCounter()}>Increase</button>
    </p>
);

export default Root;