import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({onTodoDelete, todos}) => (
        <ul>
            {todos.map(todo =>
                <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
            )}
        </ul>
);

export default TodoList;