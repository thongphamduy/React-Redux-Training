import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo';
import {addTodo} from "../actions/TodoAction";

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoAdd: (value) => {
            dispatch(addTodo(value))
        }
    }
};

export default connect(mapDispatchToProps)(AddTodo);