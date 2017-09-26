import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({onTodoComplete, todos}) => (
        <ul>
            {todos.map(todo =>
                <TodoItem key={todo.id} text={todo.text} completed={todo.completed}
                          onClick={() => onTodoComplete(todo.id)}/>
            )}
        </ul>
);

export default TodoList;