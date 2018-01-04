import { combineReducers } from 'redux'

import contactReducer from './contactReducer'
import flashReducer from './flashReducer'
import languageReducer from './languageReducer'

var reducers = combineReducers({
    contactsState: contactReducer,
    flashData: flashReducer,
    language: languageReducer,
})

export default reducers