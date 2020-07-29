import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>Props</h1>
            <p>I'm a {props.name}, and my age is {props.age}, my fav # is: {Math.floor(Math.random() * 30)} {props.gender} </p>
            <p>{props.children}</p>

        </div>
    )
}

export default Person;