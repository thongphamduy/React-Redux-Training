import React from 'react';

const AddTodo = () => {
    return (
        <form onSubmit={handleAddTodo}>
            <input type="text" name="AddTodo" placeholder="Add todo ..."/>
            <input type="submit"/>
        </form>
    );
};

const handleAddTodo = ({e, onTodoAdd}) => {
    e.preventDefault();
    {onTodoAdd}
};
export default AddTodo;