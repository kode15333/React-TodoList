import React, { Component } from "react";
import "./App.css";
import CreateForm from "./CreateForm";
import TodoList from "./TodoList";

class App extends Component {
    state = {
        todos: []
    };

    id = 1;

    handleCreate = text => {
        this.setState({
            todos: this.state.todos.concat({
                id: this.id,
                text,
                checked: false
            })
        });
        this.id++;
    };

    handleToggle = id => {
        const { todos } = this.state;

        this.setState({
            todos: todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, checked: !todo.checked };
                } else return todo;
            })
        });
    };

    handleRemove = id => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    };
    render() {
        return (
            <div className="App">
                <h3>TODO LIST</h3>
                <CreateForm onCreate={this.handleCreate} />
                <TodoList
                    todos={this.state.todos}
                    onToggle={this.handleToggle}
                    onRemove={this.handleRemove}
                />
            </div>
        );
    }
}

export default App;
