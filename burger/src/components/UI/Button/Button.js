import React from 'react'
import classes from './Button.css'

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    //btnType the props that will be set outside
    onClick={props.clicked}
  >
    {props.children}
  </button>
)
export default button
