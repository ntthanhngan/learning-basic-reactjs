import { useNavigate } from 'react-router'

export const withRouter = (Comment) => {
    const Wrapper = (props) => {
        const history = useNavigate()
        return <Comment history={history} {...props} />
    };
    return Wrapper;
}