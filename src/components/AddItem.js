import React, { Component } from "react";
// import PropTypes from "prop-types";

class AddItem extends Component {
  render() {
    // const { id, title } = this.props.todos;

    return (
      <div className="newItem">
        <input
          type="text"
          placeholder="Add This Item"
          defaultValue="Add This Item"
          id="addItemInput"
          onClick={this.props.clearInput.bind(this)}
        />
        <button
          type="POST"
          className="submit"
          onClick={this.props.addTodo.bind(this)}
        >
          Submit
        </button>
      </div>
    );
  }
}

//PropTypes required
// AddItem.propTypes = {
// item: PropTypes.object.isRequired
// };

export default AddItem;
