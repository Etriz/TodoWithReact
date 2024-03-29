import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
//PropTypes required
Todos.propTypes = { todos: PropTypes.array.isRequired };
export default Todos;
