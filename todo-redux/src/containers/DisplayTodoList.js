import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {deleteTodo, toggleTodo} from '../actions/TodoAction'

const mapStateToProps = state => ({
    todos: state.todos
});
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTodoDelete: (id) => {
//             dispatch(deleteTodo(id));
//         }
//     };
// };
export default connect(mapStateToProps, null)(TodoList);


