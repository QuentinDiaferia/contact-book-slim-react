import React from 'react'
import Language from 'services/language'

import LoginForm from 'components/login/LoginForm'

import Session from 'services/session'

export default class Login extends React.Component {
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
                <h3 className="card-header">{Language.get('login', 'title-login')}</h3>
                <div className="card-body">
                    <LoginForm
                        onSubmit={this.login}
                    />
                </div>
            </div>
        )
    }
}
