import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

import './App.css';

class App extends Component {
  state = {
    nameFromState: 'NAME2 is comming state'
  }

  inputChangeHandler = (event) => {
    /*this.setState to manipulate the state  */
    this.setState({
      nameFromState: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        {/*   <ol>
          <li>1 Create TWO new components: UserInput and UserOutput</li>
          <li>2 UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>3 Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>4 Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>5 Add state to the App component (=> the username) and pass the username to the UserOutput component</li>

          <li>6 Add a method to manipulate the state (=> an event-handler method) 
          inputChangeHandler which takes event, and this.setState({ nameFrom State: event.target.value}) </li>
          <li>7 Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>8 (show props in input) Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>9 Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>10 Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol> */}
        {/* <UserInput

          changed={this.inputChangeHandler}
          currName={this.state.nameFromState}
        />
        <UserOutput name='NAME1 is hardcoded' />
        <UserOutput name={this.state.nameFromState} /> */}
        <UserInput changed={this.inputChangeHandler}
          currName={this.state.nameFromState} />
        <UserOutput userName="name1" />
        <UserOutput userName={this.state.nameFromState} />


      </div>
    );
  }
}

export default App;
