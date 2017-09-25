import React from 'react';

const AddTodo = ({onTodoAdd}) => {
    return (
        <form onSubmit={onTodoAdd}>
            <input type="text" name="AddTodo" placeholder="Add todo ..."/>
            <input type="submit"/>
        </form>
    );
};

export default AddTodo;