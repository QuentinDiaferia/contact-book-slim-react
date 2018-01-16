import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import FlashData from 'components/FlashData'
import Navbar from 'components/Navbar'
import LoginPage from 'components/login/LoginPage'

import Session from 'services/session/actions'

class App extends React.Component {
    logout(event) {
        event.preventDefault()
        Session.logout()
    }

    render() {
        return (
            this.props.session.loggedIn ? (
                <div>
                    <FlashData />
                    <Navbar
                        logout = {this.logout}
                    />
                    {this.props.children}
                </div>
            ) : (
                <LoginPage />
            )
        )
    }
}

const mapStateToProps = store => {
    return {
        session: store.session
    }
}

export default withRouter(connect(mapStateToProps)(App))
