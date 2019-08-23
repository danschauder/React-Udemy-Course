import React from 'react';

const validation = (props) => {
    let length=props.length;

    let validationMessage='';

    if (length<=5) {
        validationMessage='Text too short!';
    } else {
        validationMessage='Text Long Enough!';
    }

    return (
        <p>{validationMessage}</p>
    );
}

export default validation;