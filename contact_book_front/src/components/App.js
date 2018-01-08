import React from 'react'
import { connect } from 'react-redux'

import FlashData from 'components/FlashData'
import Navbar from 'components/Navbar'
import LoginPage from 'components/login/LoginPage'

import SessionApi from 'api/SessionApi'

class App extends React.Component {
    logout(event) {
        event.preventDefault()
        SessionApi.logout()
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

export default connect(mapStateToProps)(App)
