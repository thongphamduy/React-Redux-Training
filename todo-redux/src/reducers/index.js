import {combineReducers} from 'redux'
import FilterReducer from './FilterReducer'
import TodoReducer from './TodoReducer'
import HandlePopup from './HandlePopup'

const Reducer = combineReducers({
     filter: FilterReducer,
     todos: TodoReducer,
     isPopupEdit: HandlePopup
});

export default Reducer