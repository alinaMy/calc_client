import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          todoList: [],
          todoInput: '',
          todoInputValid: false

      };
  }
    addTodo(){
      const todoList = this.state.todoList;
      todoList.push(this.state.todoInput);
      this.setState({
        todoList: todoList,
        todoInput: ' '
      });

      }
     inputChange(v){
      let todoInputValid = v.length >=3;
      this.setState({
          todoInput: v,
          todoInputValid
      });

      }


  render() {
    return (
      <div>
        <input type = 'text'
               value = {this.state.todoInput}
               onChange={(e) => this.inputChange(e.target.value)}
        />
        <button onClick={() => this.addTodo()}>add</button>
        <ul>
            {this.state.todoList.map((el, i) =>li></li>)} <
        </ul>
      </div>
    );
  }
}

export default App;
