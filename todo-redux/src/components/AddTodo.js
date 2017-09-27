import React from 'react';
import { connect } from 'react-redux'
import {addTodo} from "../actions/TodoAction";

let AddTodo = ({onTodoAdd}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onTodoAdd(e.target.value);
            console.log(e);
        }}>
            <input type="text" name="AddTodo" placeholder="Add todo ..."/>
            <button type="submit">Add Todo</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoAdd: (text) => {
            dispatch(addTodo(text))
        }
    }
};


// export default AddTodo = connect(mapDispatchToProps)(AddTodo);
export default AddTodo =connect(null, mapDispatchToProps)(AddTodo);