import React, { Component } from 'react'
import axios from '../../axios-orders'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  mayo: 0.25
}

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingredients: null,
    totalPrice: 4, //base price for the bun
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
    testPrice: 777
  }
  componentDidMount() {
    axios
      .get('https://burger-fc48d.firebaseio.com/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data })
      })
      .catch((error) => {
        this.setState({ error: true })
      })
  }

  updatePurchaseState(ingredients) {
    //turning object ingredients into array
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        //will check if there's at least one ingredient
        console.log(`${sum + el} `)
        return sum + el
      }, 0)
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    //calling to updatePurchaseState to see if there's more than 1 ing
    this.updatePurchaseState(updatedIngredients)
  }

  //same as addIngredientHandler just minus - 1
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    // making sure it's not gonna go lower 0
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    //calling to updatePurchaseState to see if there's more than 1 ing
    this.updatePurchaseState(updatedIngredients)
  }

  //when we click order now button
  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  //backdrop close
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
      //price should be calculated on the server
      //products are saved on the server,
      //so user won't be able to maniputale the price
      price: this.state.totalPrice,
      customer: {
        name: 'USER',
        address: {
          street: 'My st',
          zipCode: '42411',
          country: 'USA'
        },
        email: 'ROOT@gmail.com'
      },
      deliveryMethod: 'fast'
    }
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false })
        //purchasing: false will close the modal
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false })
      })
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients //and it's 0 by default
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
      // {salad: true, meat: false, ...}
    }

    let orderSummary = null
    let burger = <Spinner />

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            //purchasable is comming from this file state
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
            test={this.state.testPrice}
          />
        </Aux>
      )
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      )
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)
