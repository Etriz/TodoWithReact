import React, { Component } from "react";
import Todos from "./components/Todos";
import AddItem from "./components/AddItem";
import "./App.css";
// import faker from "faker";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "take out the trash", completed: false },
      { id: 2, title: "walk the dog", completed: false },
      { id: 3, title: "meeting with boss", completed: false }
    ]
  };
  //toggle complete with checkbox
  markComplete = id =>
    this.setState({
      todos: this.state.todos.map(elem => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem;
      })
    });
  //delete item with X button
  delTodo = id => {
    //find index in todos of id
    const index = this.state.todos.findIndex(elem => elem.id === id);
    console.log(index);
    //delete item clicked on from todos
    this.state.todos.splice(index, 1);
    this.setState({ todos: this.state.todos });
    console.table(this.state.todos);
  };
  addTodo = () => {
    const value = document.getElementById("addItemInput").value;
    console.log(value);
    this.state.todos.push({
      id: this.state.todos[this.state.todos.length - 1].id + 1,
      title: value,
      completed: false
    });
    this.clearInput();
    // update state
    this.setState({
      todos: this.state.todos
    });
    console.table(this.state.todos);
  };
  clearInput = () => {
    const input = document.getElementById("addItemInput");
    input.value = "";
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Todo List</h1>
        </div>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
        <AddItem
          todos={this.state.todos}
          addTodo={this.addTodo}
          clearInput={this.clearInput}
        />
      </div>
    );
  }
}

export default App;
