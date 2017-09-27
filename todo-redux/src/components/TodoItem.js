import React from 'react';
import DeleteTodoContainer from '../containers/DeleteTodoContainer'

let TodoItem = ({onTodoDelete, text, key}) => {
    return (
        <div>
            <li >
                {text}
            </li>
            <button onClick={onTodoDelete(key)}>X</button>
        </div>
    );
};

export default TodoItem;