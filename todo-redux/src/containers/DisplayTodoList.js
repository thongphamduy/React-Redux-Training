import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {deleteTodo, toggleTodo} from '../actions/TodoAction'

const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.filter
});
function mapDispatchToProps (dispatch) {
    return {
        onTodoComplete: (id) => {
            dispatch(toggleTodo(id))
        },
        onTodoDelete: (id) => {
            dispatch(deleteTodo(id))
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


