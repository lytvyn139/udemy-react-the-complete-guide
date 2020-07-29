import React from 'react';


const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I'm a {props.name}, and my age is {props.age}, {props.gender} </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
}
export default Person;