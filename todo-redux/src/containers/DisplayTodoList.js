import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions/TodoAction'

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoComplete: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};
export default DisplayTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);




