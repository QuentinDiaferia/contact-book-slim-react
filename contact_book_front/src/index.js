import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'store'
import Language from 'services/language/actions'

import RouterApp from 'components/RouterApp'

Language.load('en')

ReactDOM.render(
    <Provider store = {store}>
        <RouterApp />
    </Provider>,
    document.getElementById('root')
)
