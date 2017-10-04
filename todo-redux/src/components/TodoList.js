import React from 'react';
import TodoItem from "./TodoItem";

const listStyle = {
        width: "50%"
}
const TodoList = ({onTodoDelete, todos, onTodoComplete}) => (
        <ul className="list-group" style={listStyle}>
            {todos.map(todo =>
                <TodoItem key={todo.id} text={todo.text}
                          completed={todo.completed} onTodoDelete={()=> onTodoDelete(todo.id)}
                        onTodoComplete={()=> onTodoComplete(todo.id)}/>

            )}
        </ul>
);

export default TodoList;