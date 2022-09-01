import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './ListUsers.scss'

class ListUsers extends React.Component {
    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')

        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })

        // console.log('>>> check res', res.data.data)
    }
    handleViewUserDetail = (user) => {
        this.props.history.push(`user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state

        return (
            <div className='list-users-container'>
                <div className='title'>
                    Fetch all list users
                </div>
                <div className='list-users-content'>
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div
                                    className='item'
                                    key={item.id}
                                    onClick={() => this.handleViewUserDetail(item)}
                                >
                                    <p>{index + 1}</p> &nbsp;-&nbsp;
                                    <p>{item.first_name} {item.last_name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(ListUsers);