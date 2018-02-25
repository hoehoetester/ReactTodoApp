import React from "react";
import { render } from "react-dom";

import styles from "./index.css";

class App extends React.Component {
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

    handleAdd(e) {
        e.preventDefault();
        const inputValue = this.textInput.value;
        if (inputValue === "") {
            return false;
        }
        const newTodo = {
            id: new Date().getTime(),
            todo: this.textInput.value,
            isCompleted: false
        };

        this.updateTodos([...this.state.todos, newTodo]);
        this.textInput.value = "";
        this.textInput.focus();
    }

    handleDelete(id) {
        var newTodos = this.state.todos.filter(todo => id !== todo.id);

        this.updateTodos(newTodos);
    }

    handleFilterChanged(e) {
        this.setState({
            filter: e.target.value
        });
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

    handleUpdateTodo(id, e) {
        const updatedValue = e.target.value;
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.todo = updatedValue;
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
                <form onSubmit={this.handleAdd.bind(this)}>
                    <input
                        type="text"
                        ref={input => {
                            this.textInput = input;
                        }}
                    />
                    <button type="submit" className="btn">
                        add
                    </button>
                </form>
                <select onChange={this.handleFilterChanged.bind(this)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incompleted">Incompleted</option>
                </select>
                <p>{filterdTodos.length} todo(s)</p>
                <ul>
                    {filterdTodos.map(todo => {
                        return (
                            <li key={todo.id}>
                                <input
                                    type="checkbox"
                                    className="chk-isCompleted"
                                    checked={todo.isCompleted}
                                    onChange={() => {
                                        this.handleToggleComplet(todo.id);
                                    }}
                                />
                                <input
                                    className="todo"
                                    ref={el => {
                                        this.todoInput = el;
                                    }}
                                    defaultValue={todo.todo}
                                    onChange={e => {
                                        this.handleUpdateTodo(todo.id, e);
                                    }}
                                />

                                <button
                                    className="btn btn-delete"
                                    onClick={() => {
                                        this.handleDelete(todo.id);
                                    }}
                                >
                                    &times;
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const dummyData = [
    { id: 1, todo: "clean room", isCompleted: false },
    { id: 2, todo: "fix roof", isCompleted: true },
    { id: 3, todo: "learn react123", isCompleted: false }
];

render(
    <App dummyData={dummyData} style={styles} />,
    document.getElementById("root")
);
