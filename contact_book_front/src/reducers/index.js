import { combineReducers } from 'redux'

import ContactReducer from 'reducers/ContactReducer'
import FlashReducer from 'reducers/FlashReducer'
import LanguageReducer from 'reducers/LanguageReducer'
import SessionReducer from 'reducers/SessionReducer'

var reducers = combineReducers({
    contactsState: ContactReducer,
    flashData: FlashReducer,
    language: LanguageReducer,
    session: SessionReducer,
})

export default reducers