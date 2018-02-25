import React from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
  render() {
    var items = this.props.items.map(todo => {
      return (
        <TodoListItem
          todo={todo}
          toggleComplete={this.props.toggleComplete}
          updateTodo={this.props.updateTodo}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });

    return (
      <div>
        <p>{items.length} todo(s)</p>
        <ul>{items}</ul>
      </div>
    );
  }
}
