import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {deleteTodo, toggleTodo} from '../actions/TodoAction'
import TodoItem from "../components/TodoItem";

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoDelete: (id) => {
            dispatch(deleteTodo(id));
            console.log("dispatched delete todo");
        }
    };
};
export default connect(null, mapDispatchToProps)(TodoItem);


