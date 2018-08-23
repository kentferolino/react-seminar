import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SingleTodo from './components/SingleTodo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    }
  }

  onInputChange = (e) => {
    this.setState({ currentTodo: e.target.value })
  }
  addTodos = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo)

    this.setState({ todos: todosCopy, currentTodo: "" });
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i,1);
    this.setState({ todos: todosCopy});
  }

  render() {
    const todosList = this.state.todos.map((e, i) => {
      return (
        <SingleTodo key={i} todo={e} delete={this.deleteTodo.bind(i)} />
      )
    })

    return (
      <div>
        <input placeholder="Enter todo" value={this.state.currentTodo} onChange={this.onInputChange} />
        <button onClick={this.addTodos.bind(this)}> Add! </button>
        <br />
        {this.state.todos.length === 0 ? "No todos yet" : "You still have some todos!"}
        <br />
        <ul>
          {todosList}
        </ul>
      </div>
    )
  }



}

export default App;
