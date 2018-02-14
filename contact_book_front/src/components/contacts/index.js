import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListContainer from 'components/contacts/list'
import ContactContainer from 'components/contacts/view'
import FormContainer from 'components/contacts/add'
import FormEditContainer from 'components/contacts/edit'

export default class ContactsPage extends React.Component {
    render() {
        const baseUrl = BASE_PATH + '/contacts/'
        return (
            <Switch>
                <Route exact path = {baseUrl} component = {ListContainer} />
                <Route path = {baseUrl + 'view/:id'} component = {ContactContainer} />
                <Route path = {baseUrl + 'add/'} component = {FormContainer} />
                <Route path = {baseUrl + 'edit/:id'} component = {FormEditContainer} />
            </Switch>
        )
    }
}

