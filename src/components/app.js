import React, { Component } from 'react';
import TextBlock from "./textBlock";

const App = (props) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <TextBlock>
                            Привет
                        </TextBlock>
                        Counter: {props.counter}
                    </div>
                    <button className="btn btn-success" onClick={props.incrementCounter}>Increase</button>
                </div>
            </div>
        </div>
    );
};

export default App;