import React from "react";
import AddTodoComponent from "./AddTodoComponent";
import { toast } from 'react-toastify';

class ListTodoComponent extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Writing project' },
            { id: 'todo3', title: 'Learning react' },
        ],
        editTodo: {}
    }

    addNewTodo = (item) => {
        this.setState({
            listTodos: [...this.state.listTodos, item]
        })
        toast.success('Adding successful!')
    }
    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.info('Todo was deleted!')
    }
    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            //Clone list todo 
            let listTodosCopy = [...listTodos]

            //finding index of list todo copy 
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id)

            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: ''
            })
            toast.success('Editting successful!')
            return
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        return (
            <div className="list-todo-container">
                <AddTodoComponent
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-item" key={item.id}>
                                    {
                                        isEmptyObj === true ?
                                            <div className="todo-title">
                                                <p>{index + 1} - {item.title}</p>
                                            </div>
                                            :
                                            <>
                                                {
                                                    editTodo.id === item.id ?
                                                        <div className="todo-title">
                                                            <p>{index + 1} -
                                                                <input
                                                                    value={editTodo.title}
                                                                    onChange={(event) => { this.handleOnChangeEditTodo(event) }}
                                                                />
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="todo-title">
                                                            <p>{index + 1} - {item.title}</p>
                                                        </div>
                                                }
                                            </>
                                    }
                                    <div className="todo-action">
                                        <button type='button'
                                            onClick={() => { this.handleEditTodo(item) }}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button type='button'
                                            onClick={() => { this.handleDeleteTodo(item) }}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodoComponent;