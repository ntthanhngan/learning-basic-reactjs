import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {
    handleDeleteUser = (user) => {
        console.log('>>> check user delete: ', user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        let listUsers = this.props.dataRedux

        return (
            <>
                < div >
                    Hello world with React
                </div >
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <button type='button'
                                        onClick={() => this.handleDeleteUser(item)}>x</button>
                                </div>

                            )
                        })

                    }
                    <button onClick={() => this.handleCreateUser()}>Add user</button>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);