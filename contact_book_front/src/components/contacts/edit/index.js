import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ContactApi from 'services/contacts'
import Flash from 'services/flash'

import Form from 'components/contacts/Form'


class FormEditContainer extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: this.props.contact.name,
            phone: this.props.contact.phone,
            message: '',
            redirect: false
        }

        this.onFormChange = this.onFormChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)

        ContactApi.getContact(this.props.match.params.id)
            .catch(error => {
                this.setState({redirect: true})
            })
    }

    onFormChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    onFormSubmit(e) {
        e.preventDefault()
        if (this.state.name === '' || this.state.phone === '') {
            this.setState({message: 'Both fields are required.'})
        } else {
            e.target.reset()
            this.setState({
                message: '',
                redirect: true
            })
            ContactApi.editContact({
                id: this.props.contact.id,
                name: this.state.name,
                phone: this.state.phone
            })
            Flash.add('Contact edited', 'success')
        }
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to = {BASE_PATH + '/contacts/'} />
            )
        } else {
            return (
                <Form
                    onChange = {this.onFormChange}
                    onSubmit = {this.onFormSubmit}
                    message = {this.state.message}
                    defaultValue = {this.props.contact}
                />
            )
        }
    }
}

FormEditContainer.propTypes = {
    contact: PropTypes.object.isRequired,
}

const mapStateToProps = store => {
    return {
        contact: store.contactsState.currentContact
    }
}

export default connect(mapStateToProps)(FormEditContainer)
