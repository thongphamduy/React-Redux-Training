import React from 'react';
import styles from '../styles/TodoList.css'

let TodoItem = ({ onTodoDelete, text, onTodoComplete, id, completed, onTodoEdit}) => {
    let rowStyle = `list-group-item ${styles.TodoItem} `;
    if (completed) {
        rowStyle += `${styles.TodoItemTextCompleted}`;
        console.log(rowStyle);
    }
    return (
        <div>
            <li onClick={()=>{onTodoComplete(id)}} className={rowStyle}>
                {text}
                <button onClick={()=> {onTodoDelete(id)}} className={`btn btn-danger pull-right ${styles.TodoItemBtn}`}>
                    <span className="glyphicon glyphicon-remove"> </span>
                </button>

            </li>
            <button onClick={()=> {onTodoEdit()}} className={`btn btn-info pull-right ${styles.TodoItemBtn}`}>
                <span className="glyphicon glyphicon-pencil"> </span>
            </button>
        </div>
    );
};

export default TodoItem;
