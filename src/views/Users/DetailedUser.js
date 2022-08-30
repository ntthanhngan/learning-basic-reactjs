import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom'

class DeltailedUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)

            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })

            console.log('>>> check res: ', res)
        }
    }
    handleBackBtn = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0

        console.log('>>> check isEmptyObj: ', isEmptyObj)
        return (
            <>
                <div>
                    Hello world from detailed user: {this.props.match.params.id}
                </div>
                {isEmptyObj === false &&
                    <>
                        <div>User's name: {user.first_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} alt='' />
                        </div>
                        <div>
                            <button
                                type='button'
                                onClick={() => this.handleBackBtn()}
                            >
                                Back to list
                            </button>
                        </div>
                    </>
                }
            </>
        );
    }
}

export default withRouter(DeltailedUser);