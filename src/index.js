import React from "react";
import { render } from "react-dom";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import styles from "./index.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: props.dummyData,
      filter: "All"
    };
  }

  updateTodos(newTodos) {
    this.setState({
      todos: newTodos
    });
  }

  handleChangeFilter(e) {
    this.setState({
      filter: e.target.value
    });
  }

  handleAddTodo(value) {
    const newTodo = {
      id: new Date().getTime(),
      todo: value,
      isCompleted: false
    };

    this.updateTodos([...this.state.todos, newTodo]);
  }

  handleDeleteTodo(id) {
    var newTodos = this.state.todos.filter(todo => id !== todo.id);

    this.updateTodos(newTodos);
  }

  handleToggleComplet(id) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    this.updateTodos(newTodos);
  }

  handleUpdateTodo(id, value) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.todo = value;
      }
      return todo;
    });
    this.updateTodos(newTodos);
  }

  render() {
    const filterdTodos = this.state.todos.filter(todo => {
      const filter = this.state.filter;
      switch (filter) {
        case "All":
          return todo;
        case "Completed":
          return todo.isCompleted;
        case "Incompleted":
          return !todo.isCompleted;
        default:
          return todo;
      }
    });

    return (
      <div>
        <TodoForm submitForm={this.handleAddTodo.bind(this)} />
        <TodoFilter changeFilter={this.handleChangeFilter.bind(this)} />
        <TodoList
          items={filterdTodos}
          toggleComplete={this.handleToggleComplet.bind(this)}
          updateTodo={this.handleUpdateTodo.bind(this)}
          deleteTodo={this.handleDeleteTodo.bind(this)}
        />
      </div>
    );
  }
}

const dummyData = [
  { id: 1, todo: "clean room", isCompleted: false },
  { id: 2, todo: "change lightbulb", isCompleted: true },
  { id: 3, todo: "learn react", isCompleted: false }
];

render(
  <TodoApp dummyData={dummyData} style={styles} />,
  document.getElementById("root")
);
