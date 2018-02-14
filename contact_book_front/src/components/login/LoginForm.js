import React from 'react'
import { connect } from 'react-redux'
import Language from 'services/language'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {
                'email': '',
                'password': '',
            },
            formErrors: {},
        }

        this.getFormErrors = this.getFormErrors.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    getFormErrors() {
        const formErrors = {}
        if (this.state.formData.email === '') {
            formErrors.email = Language.get('general', 'error-required')
        }
        if (this.state.formData.password === '') {
            formErrors.password = Language.get('general', 'error-required')
        }
        this.setState({formErrors})
        return formErrors
    }

    onChange(event) {
        const formData = this.state.formData
        formData[event.target.name] = event.target.value
        this.setState({formData})
    }

    onSubmit(event) {
        if (Object.keys(this.getFormErrors()).length === 0) {
            this.props.onSubmit(this.state.formData)
        }
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                {this.props.session.error ? (
                    <p>{Language.get('login', 'error-auth')}</p>
                ) : null}
                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder={Language.get('login', 'label-email')} onChange={this.onChange} />
                    {this.state.formErrors.email ? (
                        <p>{this.state.formErrors.email}</p>
                    ) : null}
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder={Language.get('login', 'label-password')} onChange={this.onChange} />
                    {this.state.formErrors.password ? (
                        <p>{this.state.formErrors.password}</p>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = store => {
    return {
        session: store.session
    }
}

export default connect(mapStateToProps)(LoginForm)
