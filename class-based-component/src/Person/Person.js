import React from 'react';
import styled from 'styled-components';

const Person = (props) => {
    const styleWidth = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        styled.div`
            width: 60%;
            margin: 1rem;
            border: 1px solid #000;
            box-shadow: 0 2px 3px #ccc;
            padding: 1rem;
            text-align: center;
        `
        < p onClick = { props.click } > I'm a {props.name}, and my age is {props.age}</p>
            < p > { props.children }</p >
                <input type='text' onChange={props.changed} value={props.name} />
        </div >
    )
}
export default Person;