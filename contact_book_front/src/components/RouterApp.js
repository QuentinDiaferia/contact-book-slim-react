import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from 'components/App'
import Home from 'components/Home'
import ListContainer from 'components/contacts/ListContainer'
import ContactContainer from 'components/contacts/ContactContainer'
import FormContainer from 'components/contacts/FormContainer'
import FormEditContainer from 'components/contacts/FormEditContainer'

class RouterApp extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path = {BASE_PATH + '/'} component = {Home} />
                        <Route path = {BASE_PATH + '/list'} component = {ListContainer} />
                        <Route path = {BASE_PATH + '/contact/:id'} component = {ContactContainer} />
                        <Route path = {BASE_PATH + '/add'} component = {FormContainer} />
                        <Route path = {BASE_PATH + '/edit/:id'} component = {FormEditContainer} />
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}

export default RouterApp
