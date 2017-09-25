import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({onTodoComplete, onTodoDelete, todos}) => (

        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} text={todo.text} completed={todo.completed}
                          onTodoComplete={onTodoComplete} onTodoDelete={onTodoDelete}/>
            ))}
        </ul>
);

export default TodoList;