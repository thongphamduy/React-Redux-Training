import {combineReducers} from 'redux'
import FilterReducer from './FilterReducer'
import TodoReducer from './TodoReducer'
import HandlePopup from './HandlePopup'

const Reducer = combineReducers({
     filter: FilterReducer,
     todos: TodoReducer,
     editTodo: HandlePopup
});

export default Reducer