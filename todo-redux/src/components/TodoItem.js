import React from 'react';

export default  {
    rowStyle: {
        width: '500px'
    }
}
let TodoItem = ({ onTodoDelete, text, onTodoComplete, id}) => {
    return (
        <div>
            <li onClick={()=>{onTodoComplete(id)}} className="list-group-item" style={}>
                {text}
            </li>
            <button onClick={()=> {onTodoDelete(id)}}>X</button>
        </div>
    );
};

export default TodoItem;
