import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import FlashData from './FlashData'
import Home from './Home'
import ListContainer from './ListContainer'
import ContactContainer from './ContactContainer'
import FormContainer from './FormContainer'
import FormEditContainer from './FormEditContainer'

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
