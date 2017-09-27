import React from 'react';

let TodoItem = ({onTodoComplete, onTodoDelete, text, completed}) => {
    return (
        <div>
            <li >
                {text}
            </li>
            <button onClick={onTodoDelete}>X</button>
        </div>
    );
};

export default TodoItem;