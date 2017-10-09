import React from 'react';
import TodoItem from "./TodoItem";
import styles from '../styles/TodoList.css'

const TodoList = ({onTodoDelete, todos, onTodoComplete}) => {
    console.log("list todo to render ", todos)
        return (
            <ul className={`list-group ${styles.TodoList}`}>
                    {todos.map(todo =>
                        <TodoItem key={todo.id} text={todo.text}
                                  completed={todo.completed} onTodoDelete={()=> onTodoDelete(todo.id)}
                                  onTodoComplete={()=> onTodoComplete(todo.id)}/>

                    )}
            </ul>
        );
}

export default TodoList;