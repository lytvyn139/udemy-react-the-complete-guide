import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const App = props => {
  /* useState ALWAYS returns the array with two elements */
  /* 1st element: will always be our current state, and we change it - the updated state */
  /* 2nd elemend is always be a fn that allows us to update this state, 
    such as react is aware of it, and it will re-render this component  */
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'MIKE', age: 18, gender: 'male' },
      { name: 'MEGGIE', age: 19, gender: 'female' }
    ]
  });
  // console.log(personsState);
  // console.log(setPersonsState);

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log('was clicked')
    //will not work
    //this.state.persons[0].name = 'ROOT';
    setPersonsState({
      persons: [
        { name: 'scrapa', age: 18, gender: 'male' },
        { name: 'strapa', age: 19, gender: 'female' }
      ]
    })
  }

  return (
    <div className="App" >
      <h1>React App</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name='Sam' age="33" />
      <Person name='Sally' age="51">and I like cats </Person>
      <h1>Using state</h1>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        gender={personsState.persons[0].gender}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        gender={personsState.persons[1].gender}
      />

    </div >

  )
}


export default App;
