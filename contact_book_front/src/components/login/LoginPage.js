import React from 'react'
import Language from 'services/language/actions'

import LoginForm from 'components/login/LoginForm'

import Session from 'services/session/actions'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.login = this.login.bind(this)
    }

    login(data) {
        Session.login(data.email, data.password)
    }

    render() {
        return (
            <div className="Login card">
                <div className="card-block">
                    <h3 className="card-title">{Language.get('login', 'title-login')}</h3>
                    <LoginForm
                        onSubmit={this.login}
                    />
                </div>
            </div>
        )
    }
}

export default LoginPage
