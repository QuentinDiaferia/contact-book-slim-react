import React from 'react'
import Language from 'services/Language'

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
            formErrors.email = 'Le champ email est requis.'
        }
        if (this.state.formData.password === '') {
            formErrors.password = 'Le champ password est requis.'
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
                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="Email" onChange={this.onChange} />
                    {this.state.formErrors.email ? (
                        <p>{this.state.formErrors.email}</p>
                    ) : null}
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange} />
                    {this.state.formErrors.password ? (
                        <p>{this.state.formErrors.password}</p>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </form>
        )
    }
}

export default LoginForm
