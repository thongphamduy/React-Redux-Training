import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {deleteTodo, toggleTodo} from '../actions/TodoAction'

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoDelete: (id) => {
            console.log("deleting id " + id)
            dispatch(deleteTodo(id));
        },
        onTodoComplete: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


