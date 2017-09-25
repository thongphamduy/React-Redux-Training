import React from 'react';

let TodoItem = ({onTodoComplete, onTodoDelete, key, text, completed}) => {
    return (
        <div>
            <li onClick={onTodoComplete} key={key}>
                {text}
            </li>
            <button onClick={onTodoDelete}>X</button>
        </div>
    );
};

export default TodoItem;