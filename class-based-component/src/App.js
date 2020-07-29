import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Mike', age: 28, gender: 'male' },
      { name: 'Maggie', age: 29, gender: 'female' }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.log('was clicked')
    //will not work
    //this.state.persons[0].name = 'ROOT';
    this.setState({
      persons: [
        { name: 'Mikey', age: 18, gender: 'male' },
        { name: 'Magga', age: 19, gender: 'female' }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name='Sam' age="33" />
        <Person name='Sally' age="51">and I like cats </Person>
        <h1>Using state</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          gender={this.state.persons[0].gender}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          gender={this.state.persons[1].gender}
        />

      </div >
    )
  }
}


export default App;
