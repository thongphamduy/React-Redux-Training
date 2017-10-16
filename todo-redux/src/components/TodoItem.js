import React from 'react';
import styles from '../styles/TodoItem.css'
import "react-day-picker/lib/style.css";
import ModalEditTodo from './ModalEditTodo'


let TodoItem = ({onTodoDelete, onTodoComplete, id, todo, isPopupEdit,onTodoEdit,onHideEdit,onSaveEdit}) => {
    let rowStyle = `list-group-item col-md-10`;
    if (todo.completed) {
        rowStyle += `${styles.TodoItemTextCompleted}`;
        console.log(rowStyle);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <li onClick={()=>{onTodoComplete(id)}} className={rowStyle}>
                    {todo.text}
                </li>
                <div className="btn-group col-md-2" role="group" >
                    <button type="button" onClick={()=> {onTodoDelete(id)}} className={`btn btn-danger pull-right ${styles.TodoItemBtn}`}>
                        <span className="glyphicon glyphicon-remove"> </span>
                    </button>

                    <button type="button" onClick={()=> {onTodoEdit()}} className={`btn btn-info pull-right ${styles.TodoItemBtn}`} data-target="#myModal">
                        <span className="glyphicon glyphicon-pencil"> </span>
                    </button>
                </div>
                <ModalEditTodo isPopupEdit={isPopupEdit} onHideEdit={onHideEdit} todo={todo}
                               onSaveEdit={onSaveEdit}/>
            </div>
        </div>
    );
};

export default TodoItem;
