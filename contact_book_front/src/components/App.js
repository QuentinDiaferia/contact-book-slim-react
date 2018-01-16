import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import FlashData from 'components/FlashData'
import Navbar from 'components/Navbar'
import LoginPage from 'components/login'

import Session from 'services/session'

class App extends React.Component {
    logout(event) {
        event.preventDefault()
        Session.logout()
    }

    render() {
        return (
            this.props.session.loggedIn ? (
                <React.Fragment>
                    <FlashData />
                    <Navbar
                        logout = {this.logout}
                    />
                    {this.props.children}
                </React.Fragment>
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
