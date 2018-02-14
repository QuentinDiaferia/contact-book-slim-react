import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from 'components/App'
import Home from 'components/home'
import ContactPage from 'components/contacts'

export default class RouterApp extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path = {BASE_PATH + '/'} component = {Home} />
                        <Route path = {BASE_PATH + '/contacts/'} component = {ContactPage} />
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}
