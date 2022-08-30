import React from 'react';
import './Navbar.scss'
import { NavLink } from 'react-router-dom'


class NavbarComponent extends React.Component {

    state = {}

    render() {
        return (
            <div>
                <div className='topnav'>
                    <NavLink to="/" activeclassname='active' exact>Home</NavLink>
                    <NavLink to="/todos" activeclassname='active'>Todos</NavLink>
                    <NavLink to="/about" activeclassname='active'>About</NavLink>
                    <NavLink to="/user" activeclassname='active'>Users</NavLink>
                </div>
            </div >
        );
    }
}

export default NavbarComponent;