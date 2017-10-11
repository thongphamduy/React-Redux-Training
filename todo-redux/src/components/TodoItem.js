import React from 'react';
import styles from '../styles/TodoList.css'
import EditTodo from "./EditTodo";

let TodoItem = ({ onTodoDelete, text, onTodoComplete, id, completed, isPopupEdit}) => {
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
            <button onClick={()=> {
                console.log("clicked edit")
                if(isPopupEdit){
                    return (
                        <EditTodo/>
                    )
                }
            }} className={`btn btn-info pull-right ${styles.TodoItemBtn}`}>
                <span className="glyphicon glyphicon-pencil"> </span>
            </button>
        </div>
    );
};

export default TodoItem;
