import React, { Component } from 'react';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import './components/UserOutput.css';

class App extends Component {
  state = {
    username: 'IURII'
  }

  usenameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  render() {
    return (
      <div className="App" >
        <UserInput
          changed={this.usenameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="MIKE HARDCODEDete" />
      </div >
    )
  }
}


export default App;
