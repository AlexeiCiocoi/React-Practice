import { combineReducers } from 'redux'
import postReducer from './postReducer.jsx'
import roomReducer from './roomReducer.jsx'

import modalReducer from './modalReducer.jsx'
import todoReducer from './todoReducer.jsx'

const rootReducer = combineReducers({
    postReducer,
    roomReducer,
    modalReducer,
    todoReducer

})

export default rootReducer