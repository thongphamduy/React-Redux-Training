import React from 'react';

const AddTodo = ({onTodoAdd}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onTodoAdd(e);
            console.log(e);
        }}>
            <input type="text" name="AddTodo" placeholder="Add todo ..."/>
            <input type="submit"/>
        </form>
    );
};

export default AddTodo;