import React from 'react';
import TodoItem from "./TodoItem";
import styles from '../styles/TodoList.css'
import ModalEditTodo from "./ModalEditTodo";

const TodoList = ({onTodoDelete, todos, onTodoComplete, editTodo,onTodoEdit,onHideEdit, onSaveEdit}) => {

        return (
            <div>
                <ul className={`list-group ${styles.TodoList}`}>
                    {todos.map(todo =>
                        <TodoItem key={todo.id} todo={todo}
                                  onTodoDelete={()=> onTodoDelete(todo.id)}
                                  onTodoComplete={()=> onTodoComplete(todo.id)}
                                  onTodoEdit={()=>onTodoEdit(todo.id)}

                        />
                    )}
                </ul>
                <ModalEditTodo editTodo={editTodo}
                               todoToEdit={todos.find(todo=>todo.id===editTodo.id)}
                               onHideEdit={onHideEdit}
                               onSaveEdit={(myParams)=> {
                                   const newParams = Object.assign({}, myParams, {id: editTodo.id});
                                   onSaveEdit(newParams);
                               }}
                />
            </div>

        );
}

export default TodoList;