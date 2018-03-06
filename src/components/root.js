import React, { Component } from 'react';

const Root = (props) => (
    <p>
        Counter: {props.counter} <button onClick={props.incrementCounter()}>Increase</button>
    </p>
);

export default Root;