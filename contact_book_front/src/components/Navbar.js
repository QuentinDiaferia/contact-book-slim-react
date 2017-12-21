import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to = '/' exact className="nav-link" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = '/list' className="nav-link" activeClassName="active">
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = '/add' className="nav-link" activeClassName="active">
                                Add contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;
