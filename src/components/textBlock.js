import React, { Component } from 'react';

const TextBlock = (props) => {
    return (
        <div className="row">
            <p className="text-block">
                {props.children}
            </p>
        </div>
    );
};

export default TextBlock;