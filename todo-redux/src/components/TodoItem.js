import React from 'react';
import DeleteTodoContainer from '../containers/DeleteTodoContainer'

let TodoItem = (props) => {
    return (
        <div>
            <li onClick={props.onTodoComplete}>
                {props.text}
            </li>
            <button onClick={props.onTodoDelete}>X</button>
        </div>
    );
};

export default TodoItem;