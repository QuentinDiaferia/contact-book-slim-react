import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from 'components/Navbar'
import FlashData from 'components/FlashData'
import Home from 'components/Home'
import LoginPage from 'components/login/LoginPage'
import ListContainer from 'components/contacts/ListContainer'
import ContactContainer from 'components/contacts/ContactContainer'
import FormContainer from 'components/contacts/FormContainer'
import FormEditContainer from 'components/contacts/FormEditContainer'

class App extends React.Component {
    render() {
        return (
            <div>
                <FlashData />
                <Navbar />
                <Switch>
                    <Route exact path = {BASE_PATH + '/'} component = {Home} />
                    <Route path = {BASE_PATH + '/list'} component = {ListContainer} />
                    <Route path = {BASE_PATH + '/contact/:id'} component = {ContactContainer} />
                    <Route path = {BASE_PATH + '/add'} component = {FormContainer} />
                    <Route path = {BASE_PATH + '/edit/:id'} component = {FormEditContainer} />
                </Switch>
            </div>
        )
    }
}

export default App
