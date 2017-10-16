import React from 'react';
import TodoItem from "./TodoItem";
import styles from '../styles/TodoList.css'
import ModalEditTodo from "./ModalEditTodo";

const TodoList = ({onTodoDelete, todos, onTodoComplete, editTodo,
                      onTodoEdit,onHideEdit, onSaveEdit}) => {

        const todoItem = todos.find(todo=> {
            if(editTodo.id !== undefined && todo.id !== undefined) {
                return todo.id===editTodo.id
            }
        })

        return (
            <div>
                <ul className={`list-group ${styles.TodoList}`}>
                    {todos.map(todo =>
                        <TodoItem key={todo.id.toString()} todo={todo}
                                  onTodoDelete={()=> onTodoDelete(todo.id)}
                                  onTodoComplete={()=> onTodoComplete(todo.id)}
                                  onTodoEdit={()=>onTodoEdit(todo.id)}
                        />
                    )}
                </ul>

                {editTodo.isShow ? <ModalEditTodo editTodo={editTodo}
                                todoToEdit={todoItem}
                                onHideEdit={onHideEdit}
                                onSaveEdit={onSaveEdit}
                />: null}

            </div>
        );
};

export default TodoList;