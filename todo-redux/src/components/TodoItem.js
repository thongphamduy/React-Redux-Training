import React from 'react';

const rowStyle = {
    width: "90%",
    display: "inline-block",
    padding: "4px"
}

let TodoItem = ({ onTodoDelete, text, onTodoComplete, id}) => {
    return (
        <div>
            <li onClick={()=>{onTodoComplete(id)}} className="list-group-item" style={rowStyle}>
                {text}
                <button onClick={()=> {onTodoDelete(id)}} className="btn btn-primary btn-danger pull-right" >X</button>
            </li>

        </div>
    );
};

export default TodoItem;
