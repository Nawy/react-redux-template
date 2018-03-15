import React, { Component } from 'react';

const App = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        Counter: {props.counter}
                    </div>
                    <button className="btn btn-success" onClick={props.incrementCounter}>Increase</button>
                </div>
            </div>
        </div>
    );
};

export default App;