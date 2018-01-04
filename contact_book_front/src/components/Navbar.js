import React from 'react'
import { NavLink } from 'react-router-dom'
import Language from '../services/Language'

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to = {BASE_PATH + '/'} exact className="nav-link" activeClassName="active">
                                {Language.get('navigation', 'tab-home')}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = {BASE_PATH + '/list'} className="nav-link" activeClassName="active">
                                {Language.get('navigation', 'tab-contacts')}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = {BASE_PATH + '/add' } className="nav-link" activeClassName="active">
                                {Language.get('navigation', 'tab-add-contact')}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar
