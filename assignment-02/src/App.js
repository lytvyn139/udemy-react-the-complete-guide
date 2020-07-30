import React, { Component } from 'react';
import Validation from './components/Validation'
import Char from './components/Char'

class App extends Component {
  state = {
    userInput: ""
  }
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deteletaCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText })
  }

  render() {
    const charList = this.state.userInput.split('').map((singleChar, index) => {
      return < Char
        character={singleChar}
        key={index}
        clicked={() => this.deteletaCharHandler(index)}
      />;
    });
    return (
      <div className="App" >
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}

      </div >
    )
  }
}

export default App;
