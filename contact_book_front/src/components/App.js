import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import FlashData from './FlashData';
import Home from './Home';
import ListContainer from './ListContainer';
import ContactContainer from './ContactContainer';
import FormContainer from './FormContainer';
import FormEditContainer from './FormEditContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <FlashData />
                <Navbar />
                <Switch>
                    <Route exact path = '/' component = {Home} />
                    <Route path = '/list' component = {ListContainer} />
                    <Route path = '/contact/:id' component = {ContactContainer} />
                    <Route path = '/add' component = {FormContainer} />
                    <Route path = '/edit/:id' component = {FormEditContainer} />
                </Switch>
            </div>
        );
    }
}

export default App;
