import React from 'react';
import { connect } from 'react-redux'
import {addTodo} from "../actions/TodoAction";

let AddTodo = ({onTodoAdd}) => {
    let input;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onTodoAdd(input.value);
            input.value='';
        }}>
            <input type="text" name="AddTodo" placeholder="Add todo ..." ref = {node => {input = node}}/>
            <button type="submit">Add Todo</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};


// export default AddTodo = connect(mapDispatchToProps)(AddTodo);
export default AddTodo =connect(null, mapDispatchToProps)(AddTodo);