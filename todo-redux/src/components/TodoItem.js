import React from 'react';
import DeleteTodoContainer from '../containers/DeleteTodoContainer'

let TodoItem = ({onTodoDelete, text, onTodoComplete, key}) => {
    return (
        <div>
            <li onClick={onTodoComplete(key)}>
                {text}
            </li>
            <button onClick={()=>{this.onTodoDelete(key)}}>X</button>
        </div>
    );
};

export default TodoItem;