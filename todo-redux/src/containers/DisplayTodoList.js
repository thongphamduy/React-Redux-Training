import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {deleteTodo, toggleTodo, saveEditTodo} from '../actions/TodoAction'
import {HandlePopup, HidePopup, ShowPopup} from '../actions/PopupAction'

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
        isPopupEdit: state.isPopupEdit
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
        onTodoEdit: () => {
            dispatch(ShowPopup())
        },
        onHideEdit: () => {
            dispatch(HidePopup())
        },
        onSaveEdit: ()=> {
            dispatch(saveEditTodo())
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


