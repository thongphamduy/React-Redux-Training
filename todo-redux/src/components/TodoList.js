import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({onTodoDelete, todos, onTodoComplete}) => (
        <ul>
            {todos.map(todo =>
                <TodoItem key={todo.id} text={todo.text}
                          id={todo.id}
                          completed={todo.completed} onTodoDelete={onTodoDelete}
                          onTodoComplete={onTodoComplete}/>
            )}
        </ul>
);

export default TodoList;