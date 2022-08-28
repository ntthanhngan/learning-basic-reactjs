import React from "react";
import './ListTodo.scss'
import { toast } from 'react-toastify';

class AddTodoComponent extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Empty title!')
            return
        }
        let todo = {
            id: 'todo' + Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (
            <div className="add-todo-form">
                <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                <button type="button" onClick={() => { this.handleAddTodo() }}>Add</button>
            </div>
        )
    }
}

export default AddTodoComponent