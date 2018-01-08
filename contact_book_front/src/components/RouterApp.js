import React from 'react'

import { Switch, Route } from 'react-router-dom'

import App from 'components/App'
import Home from 'components/Home'
import ListContainer from 'components/contacts/ListContainer'
import ContactContainer from 'components/contacts/ContactContainer'
import FormContainer from 'components/contacts/FormContainer'
import FormEditContainer from 'components/contacts/FormEditContainer'

const HomeWrapped = () => <App><Home /></App>
const ListContainerWrapped = () => <App><ListContainer /></App>
const ContactContainerWrapped = () => <App><ContactContainer /></App>
const FormContainerWrapped = () => <App><FormContainer /></App>
const FormEditContainerWrapped = () => <App><FormEditContainer /></App>

class RouterApp extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path = {BASE_PATH + '/'} component = {HomeWrapped} />
                <Route path = {BASE_PATH + '/list'} component = {ListContainerWrapped} />
                <Route path = {BASE_PATH + '/contact/:id'} component = {ContactContainerWrapped} />
                <Route path = {BASE_PATH + '/add'} component = {FormContainerWrapped} />
                <Route path = {BASE_PATH + '/edit/:id'} component = {FormEditContainerWrapped} />
            </Switch>
        )
    }
}

export default RouterApp
