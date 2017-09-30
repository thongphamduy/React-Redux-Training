import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({onTodoDelete, todos, onTodoComplete}) => (
        <ul>
            {todos.map(todo =>
                <TodoItem key={todo.id} text={todo.text}
                          completed={todo.completed} onTodoDelete={()=> onTodoDelete(todo.id)}
                        onTodoComplete={()=> onTodoComplete(todo.id)}/>

            )}
        </ul>
);

export default TodoList;