import React, { Component } from 'react';

const TextBlock = (props) => {
    return (
        <p className="text-block">
            {props.children}
        </p>
    );
};

export default TextBlock;