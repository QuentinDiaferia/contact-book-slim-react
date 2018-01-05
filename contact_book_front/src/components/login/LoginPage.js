import React from 'react'
import Language from 'services/Language'

import LoginForm from 'components/login/LoginForm'

import SessionApi from 'api/SessionApi'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.login = this.login.bind(this)
    }

    login(data) {
        
    }

    render() {
        return (
            <div className="Login card">
                <div className="card-block">
                    <h3 className="card-title">Login</h3>
                    <LoginForm
                        onSubmit={this.login}
                    />
                </div>
            </div>
        )
    }
}

export default LoginPage
