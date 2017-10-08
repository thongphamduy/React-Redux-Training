import {combineReducers} from 'redux'
import FilterReducer from './FilterReducer'
import TodoReducer from './TodoReducer'
import * as reducers from './reducers'

const Reducer = combineReducers({
     FilterReducer,
     TodoReducer
})

export default Reducer