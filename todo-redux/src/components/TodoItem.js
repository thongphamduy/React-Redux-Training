import React from 'react';
import styles from '../styles/TodoItem.css'
import { Button, ButtonToolbar, Modal, OverlayTrigger,tooltip} from 'react-bootstrap';

let TodoItem = ({ onTodoDelete, text, onTodoComplete, id, completed, isPopupEdit,onTodoEdit,onHideEdit}) => {
    let rowStyle = `list-group-item col-md-10`;
    if (completed) {
        rowStyle += `${styles.TodoItemTextCompleted}`;
        console.log(rowStyle);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <li onClick={()=>{onTodoComplete(id)}} className={rowStyle}>
                    {text}
                </li>
                <div className="btn-group col-md-2" role="group" >
                    <button type="button" onClick={()=> {onTodoDelete(id)}} className={`btn btn-danger pull-right ${styles.TodoItemBtn}`}>
                        <span className="glyphicon glyphicon-remove"> </span>
                    </button>

                    <button type="button" onClick={()=> {onTodoEdit()}} className={`btn btn-info pull-right ${styles.TodoItemBtn}`} data-target="#myModal">
                        <span className="glyphicon glyphicon-pencil"> </span>
                    </button>
                </div>

                <Modal show={isPopupEdit} onHide={onHideEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onHideEdit}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default TodoItem;
