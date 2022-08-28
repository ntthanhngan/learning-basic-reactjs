import React from 'react';

class ListTodoContentComponent extends React.Component {
    handleDeleteTodo = (item) => {
        this.props.deleteTodo(item)
    }
    render() {
        let { listTodos } = this.props;
        return (
            <div className="list-todo-content">
                {
                    listTodos && listTodos.length > 0 &&
                    listTodos.map((item, index) => {
                        return (
                            <div className="todo-item" key={item.id}>
                                <div className="todo-title">
                                    <p>{index + 1} - {item.title}</p>
                                </div>
                                <div className="todo-action">
                                    <button type='button'>Edit</button>
                                    <button type='button' onClick={() => { this.handleDeleteTodo(item) }}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ListTodoContentComponent;