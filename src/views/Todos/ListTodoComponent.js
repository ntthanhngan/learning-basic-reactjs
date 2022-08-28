import React from "react";
import AddTodoComponent from "./AddTodoComponent";
import ListTodoContentComponent from "./ListTodoContentComponent";
import { toast } from 'react-toastify';

class ListTodoComponent extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Writing project' },
            { id: 'todo3', title: 'Learning react' },
        ]
    }
    addNewTodo = (item) => {
        this.setState({
            listTodos: [...this.state.listTodos, item]
        })
        toast.success('Adding successful!')
    }
    deleteTodo = (todo) => {
        let currentTodo = this.state.listTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.info('Todo was deleted!')
    }
    render() {
        return (
            <div className="list-todo-container">
                <AddTodoComponent
                    addNewTodo={this.addNewTodo}
                />
                <ListTodoContentComponent
                    listTodos={this.state.listTodos}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }
}

export default ListTodoComponent;