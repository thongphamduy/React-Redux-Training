import React from 'react';
import styles from '../styles/TodoList.css'

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
                <button onClick={()=> {onTodoDelete(id)}} className={`btn btn-danger pull-right ${styles.TodoItemBtn}`}>
                    <span className="glyphicon glyphicon-remove"></span>
                </button>
                <button onClick={()=> {onTodoDelete(id)}} className={`btn btn-info pull-right ${styles.TodoItemBtn}`}>
                    <span className="glyphicon glyphicon-pencil"></span>
                </button>
            </li>

        </div>
    );
};
export default TodoItem;
