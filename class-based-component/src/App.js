import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';
import './Person/Person.css'

class App extends Component {
  state = {
    persons: [
      { name: 'Mike', age: 28, gender: 'male' },
      { name: 'Maggie', age: 29, gender: 'female' }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('was clicked')
    //will not work
    //this.state.persons[0].name = 'ROOT';
    this.setState({
      persons: [
        { name: newName, age: 18, gender: 'male' },
        { name: 'Mikey', age: 18, gender: 'male' },
        { name: 'Magga', age: 19, gender: 'female' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Mikey', age: 18, gender: 'male' },
        { name: event.target.value, age: 19, gender: 'female' }
      ]
    })
  }

  render() {
    /* kinda not good practice, it's hard to style :onhover */
    const butttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App" >
        <h1>React App</h1>
        {/* <button onClick={this.switchNameHandler.bind(this, 'New name')}>Switch name</button> */}
        <button
          style={butttonStyle}
          onClick={() => this.switchNameHandler()}>
          Switch name
          </button>
        <Person
          name='Sam'
          age="33"
        />
        <Person
          name='Sally'
          age="51"> and I like cats
        </Person>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          gender={this.state.persons[0].gender}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          gender={this.state.persons[1].gender}
          click={this.switchNameHandler.bind(this, 'New name2')}
          changed={this.nameChangedHandler}
        />

        <p>click on Maggie "p" she's got "this.switchNameHandler" attached</p>
        <p>same as button switch name</p>
        <p>type something into last input</p>
      </div >
    )
  }
}


export default App;
