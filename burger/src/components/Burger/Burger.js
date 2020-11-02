import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// this is actually what's gonna be rendered
const burger = (props) => {
  //making array from object in BurgerBuilder.js
  //  state = {  ingredients: {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    }) //making array from object in BurgerBuilder.js
    .reduce((arr, el) => {
      //flatten array to show the message: please start adding
      console.log(el);
      return arr.concat(el);
    }, []);

  //message if it's empty
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
