import React from 'react';

const Char = (props) => {
    const charStyle = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <div style={charStyle} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default Char;
