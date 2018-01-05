import React from 'react'
import { connect } from 'react-redux'

import FlashData from 'components/FlashData'
import Navbar from 'components/Navbar'
import LoginPage from 'components/login/LoginPage'

class App extends React.Component {
    render() {
        return (
            !this.props.session.user ? (
                <div>
                    <FlashData />
                    <Navbar />
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
