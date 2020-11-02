import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';


class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'User1', age: 28 },
      { id: 'fgh', name: 'User2', age: 29 },
      { id: 'hjk', name: 'User3', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 100 },
        { name: 'User2', age: 100 },
        { name: 'User3', age: 100 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangedHandler = (event, id) => {
    /* persons = React Create Element */
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });


    /* Old testament
    const person = Object.assign({}, this.state.persons[personIndex]);
    */

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: [
        { name: 'User1', age: 666 },
        { name: 'User2', age: 666 },
        { name: event.target.value, age: 666 },

      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    //const slicedPersons = this.state.persons.slice();
    //always create copy of the state and then update state with setState
    const slicedPersons = [...this.state.persons]
    slicedPersons.splice(personIndex, 1)
    this.setState({ persons: slicedPersons })

  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <h3> showing using maps </h3>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}

          {/* <h3> showing regular </h3>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            
            //click={this.switchNameHandler.bind(this, '3B1P')}
            click={() => this.switchNameHandler('3B1P!')}
            changed={this.nameChangedHandler} >My hobbies are: | change last input | click on User3 |
          </Person> */}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //const classes = ['red', 'bold'].join(' '); //red bold
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red'];
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red','bold'];
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <p className={classes}>it's really working</p> */}
        <p className={classes.join(' ')}>it's really working</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;