const initState = {
    users: [
        { id: '1', name: 'React' },
        { id: '2', name: 'Framework' },
        { id: '3', name: 'Angular' },
    ],
    post: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>> run action delete user: ', action)

            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)

            return {
                ...state.users, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 100000)
            let user = { id: id, name: `random - ${id}` }

            return {
                ...state, users: [...state.users, user]
            }
        default:
            break;
    }
    return state
}
export default rootReducer;