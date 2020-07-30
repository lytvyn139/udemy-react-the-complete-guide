import React from 'react';

const Validation = (props) => {
    let validationMessage = 'text long enough';
    if (props.inputLength <= 5) {
        validationMessage = 'Text too short'
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default Validation;
