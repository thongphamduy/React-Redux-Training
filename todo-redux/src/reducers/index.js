import {combineReducers} from 'redux'
import FilterReducer from './FilterReducer'
import TodoReducer from './TodoReducer'

const Reducer = combineReducers({
     filter: FilterReducer,
     todos: TodoReducer
});

export default Reducer