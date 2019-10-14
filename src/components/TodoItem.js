import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.item.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.item;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes required
TodoItem.propTypes = { item: PropTypes.object.isRequired };

const btnStyle = {
  background: "red",
  color: "white",
  borderRadius: "50%",
  padding: ".25rem .5rem"
};

export default TodoItem;
