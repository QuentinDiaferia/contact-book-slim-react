import { createStore, combineReducers } from 'redux'

import ContactReducer from 'reducers/ContactReducer'
import FlashReducer from 'services/flash/reducer'
import LanguageReducer from 'services/language/reducer'
import SessionReducer from 'services/session/reducer'

var reducers = combineReducers({
    contactsState: ContactReducer,
    flashData: FlashReducer,
    language: LanguageReducer,
    session: SessionReducer,
})

const store = createStore(reducers);

export default store;
