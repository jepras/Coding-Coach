import entries from './entries'
import fetch from './fetch'

import { combineReducers } from 'redux'

const logApp = combineReducers({
    entries,
    fetch
});

export default logApp