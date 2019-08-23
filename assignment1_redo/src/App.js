import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    username: 'Gregory'
  }


  userInputHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <UserInput
          name={this.state.username}
          changed={this.userInputHandler}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
