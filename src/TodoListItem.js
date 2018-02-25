import React from "react";

export default class TodoListItem extends React.Component {
  onUpdateTodo(e) {
    this.props.updateTodo(this.props.todo.id, e.target.value);
  }
  render() {
    const todo = this.props.todo;
    return (
      <li>
        <input
          type="checkbox"
          className="chk-isCompleted"
          checked={todo.isCompleted}
          onChange={() => {
            this.props.toggleComplete(todo.id);
          }}
        />
        <input
          type="text"
          className="todo"
          value={todo.todo}
          onChange={this.onUpdateTodo.bind(this)}
        />
        <button
          className="btn btn-delete"
          onClick={() => {
            this.props.deleteTodo(todo.id);
          }}
        >
          &times;
        </button>
      </li>
    );
  }
}
