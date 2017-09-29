import React from 'react';

let TodoItem = ({ onTodoDelete, text, onTodoComplete, id}) => {
    return (
        <div>
            <li onClick={()=>{onTodoComplete(id)}}>
                {text}
            </li>
            <button onClick={()=> {onTodoDelete(id)}}>X</button>
        </div>
    );
};

export default TodoItem;
