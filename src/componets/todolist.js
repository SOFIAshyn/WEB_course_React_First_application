import React from 'react'
import '../styles/todolist.css'
import ToDoItem from './todoitem.js'

export default class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {todos: [{
                    id: 1,
                    text: "Todo something",
                    isDone: false
                }, {
                    id: 2,
                    text: "Todo else",
                    isDone: false
                }]}
    }

    toggleIsDone(id) {
        this.setState((state) => ({
            todos: state.todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        }));
    }

    render() {
        return (
            <div className="todo-list-container">
                <div className="todo-list-header">Your todos</div>
                {this.state.todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} toggleIsDone={(id) => this.toggleIsDone(id)}/>
                ))}
            </div>
        )
    }
}