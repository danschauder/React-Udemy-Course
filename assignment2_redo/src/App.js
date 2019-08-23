import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {

  state = {
    userinput: ''
  }

  userInputHandler = (event) => {
    this.setState({
      userinput: event.target.value
    });
  }

  removeCharHandler = (index) => {
    let userArray = this.state.userinput.split('');
    userArray.splice(index,1);
    this.setState({
      userinput: userArray.join('')
    });
  }


  render() {

    let chars = this.state.userinput.split('').map((el,i)=>{
      return (
        <Char character={el} 
          key={i}
          click={this.removeCharHandler.bind(this, i)} />
      )
    });


    return (
      <div>
        <input 
          type="text" 
          value={this.state.userinput}
          onChange={this.userInputHandler.bind(this)} />
        <p>{this.state.userinput.length}</p>
        <Validation length={this.state.userinput.length} />
        {chars}
      </div>
      /*<div className="App">
        <ol>
          #<li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          #<li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          #<li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          #<li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          #<li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          #<li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>*/
    );
  }
}

export default App;
