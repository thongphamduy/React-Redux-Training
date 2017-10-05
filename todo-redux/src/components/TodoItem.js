import React from 'react';
import styles from './TodoList.css'

let TodoItem = ({ onTodoDelete, text, onTodoComplete, id, completed}) => {
    let rowStyle = `list-group-item ${styles.TodoItem} `;
    if (completed) {
        rowStyle += `${styles.TodoItemTextCompleted}`;
        console.log(rowStyle);
    }
    return (
        <div>
            <li onClick={()=>{onTodoComplete(id)}} className={rowStyle}>
                {text}
                <button onClick={()=> {onTodoDelete(id)}} className={`btn btn-primary btn-danger pull-right ${styles.TodoItemBtn}`} >X</button>
            </li>

        </div>
    );
};

export default TodoItem;
