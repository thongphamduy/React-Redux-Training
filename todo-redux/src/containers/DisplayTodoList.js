import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {deleteTodo, toggleTodo, saveEditTodo} from '../actions/TodoAction'
import { HidePopup, ShowPopup} from '../actions/PopupAction'

const FilterTodoList = (list, filter) => {
    switch (filter) {
        case 'FILTER_NEW':
            return list.filter(t=> !t.completed);
        case 'FILTER_COMPLETED':
            return list.filter(t => t.completed);
        case 'FILTER_ALL':
            return list
        default:
            return
    }
};

const mapStateToProps = state => {
    console.log('state', state)
    return {
        todos: FilterTodoList(state.todos, state.filter),
        editTodo: state.editTodo

    }
};
function mapDispatchToProps (dispatch) {
    return {
        onTodoComplete: (id) => {
            dispatch(toggleTodo(id))
        },
        onTodoDelete: (id) => {
            dispatch(deleteTodo(id))
        },
        onTodoEdit: (id) => {
            dispatch(ShowPopup(id))
        },
        onHideEdit: (id) => {
            dispatch(HidePopup(id))
        },
        onSaveEdit: (params)=> {
            dispatch(saveEditTodo(params))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


