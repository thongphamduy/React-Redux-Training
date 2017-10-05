import React from 'react';
import styles from './TodoStyle.css'

let TodoItem = ({ onTodoDelete, text, onTodoComplete, id}) => {
    return (
        <div>
            <li onClick={()=>{onTodoComplete(id)}} className="list-group-item">
                {text}
                <button onClick={()=> {onTodoDelete(id)}} className={`btn btn-primary btn-danger pull-right ${styles.TodoItemBtn}`} >X</button>
            </li>

        </div>
    );
};

export default TodoItem;
