import {combineReducers} from 'redux'
import FilterReducer from './FilterReducer'
import TodoReducer from './TodoReducer'

export default combineReducers({
    FilterReducer,
    TodoReducer
})