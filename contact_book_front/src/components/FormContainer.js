import React from 'react';

import { Redirect } from 'react-router-dom';

import ContactApi from '../api/ContactApi';
import FlashApi from '../api/FlashApi';

import Form from './Form';


class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            message: '',
            redirect: false
        };
        
        this.onFormChange = this.onFormChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        if (this.state.name === '' || this.state.phone === '') {
            this.setState({message: 'Both fields are required.'});
        } else {
            e.target.reset();
            this.setState({
                message: '',
                redirect: true
            });
            ContactApi.addContact({
                name: this.state.name,
                phone: this.state.phone
            });
            FlashApi.add('Contact added', 'success');
        }
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to = '/list' />
            );
        } else {
            return (
                <Form
                    onChange = {this.onFormChange}
                    onSubmit = {this.onFormSubmit}
                    message = {this.state.message}
                />
            );
        }
    }
}

export default FormContainer;
