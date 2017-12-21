import React from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ContactApi from '../api/ContactApi';
import FlashApi from '../api/FlashApi';
import Contact from './Contact';


class ContactContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.onDelete = this.onDelete.bind(this);
        
        ContactApi.getContact(this.props.match.params.id)
            .catch(error => {
                this.setState({redirect: true});
            });
    }

    onDelete() {
        ContactApi.deleteContact(this.props.contact.id);
        this.setState({redirect: true});
        FlashApi.add('Contact deleted', 'success');
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to = '/list' />
            );
        } else {
            return (
                <Contact
                    contact = {this.props.contact}
                    onDelete = {this.onDelete}
                />
            );
        }
    }
}

Contact.PropTypes = {
    contact: PropTypes.object.isRequired,
}

const mapStateToProps = store => {
    return {
        contact: store.contactsState.currentContact
    }
}

export default connect(mapStateToProps)(ContactContainer);
