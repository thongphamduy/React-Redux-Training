import React from 'react';
import { connect } from 'react-redux'
import {addTodo} from "../actions/TodoAction";

let AddTodo = () => {
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

const mapDispatchToProps = {
        onTodoAdd: addTodo
};

export default AddTodo =connect(null, mapDispatchToProps)(AddTodo);