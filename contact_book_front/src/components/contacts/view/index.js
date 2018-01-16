import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ContactApi from 'services/contacts'
import Flash from 'services/flash'
import Contact from 'components/contacts/view/Contact'


class ContactContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }

        this.onDelete = this.onDelete.bind(this)
        
        ContactApi.getContact(this.props.match.params.id)
            .catch(error => {
                this.setState({redirect: true})
            })
    }

    onDelete() {
        ContactApi.deleteContact(this.props.contact.id)
        this.setState({redirect: true})
        Flash.add('Contact deleted', 'success')
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to = {BASE_PATH + '/contacts/'} />
            )
        } else {
            return (
                <Contact
                    contact = {this.props.contact}
                    onDelete = {this.onDelete}
                />
            )
        }
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

const mapStateToProps = store => {
    return {
        contact: store.contactsState.currentContact
    }
}

export default connect(mapStateToProps)(ContactContainer)
