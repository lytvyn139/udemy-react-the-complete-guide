import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Mayo', type: 'mayo' }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>(BuildControls.js) passing the price {props.test}</p>
    <p>
      Current Price: <strong>(BuildControls.js){props.price.toFixed(2)}</strong>
    </p>
    {/* looping thru controls on ln 6 */}
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        /* if ingridient is 0 or less */
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW (BuildControls.js)
    </button>
  </div>
)

export default buildControls
