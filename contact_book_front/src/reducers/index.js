import { combineReducers } from 'redux';

import contactReducer from './contactReducer';
import flashReducer from './flashReducer';

var reducers = combineReducers({
    contactsState: contactReducer,
    flashData: flashReducer,
});

export default reducers;