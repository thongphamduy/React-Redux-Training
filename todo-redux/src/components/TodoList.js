import React from 'react';
import TodoItem from "./TodoItem";
import styles from './TodoList.css'

const FilterTodoList = (list, filter) => {
    switch (filter) {
        case 'FILTER_NEW':
            return list.filter(t=> !t.completed)
        case 'FILTER_COMPLETED':
            return list.filter(t => t.completed)
        case 'FILTER_ALL':
            return list
    }
}

const TodoList = ({onTodoDelete, todos, onTodoComplete,filter}) => {
        console.log(todos)
        console.log(filter)
        let filteredTodoList = FilterTodoList(todos,filter);
        console.log("list to be rendered " + filteredTodoList);
        return (
            <ul className={`list-group`}>
                    {filteredTodoList.map(todo =>
                        <TodoItem key={todo.id} text={todo.text}
                                  completed={todo.completed} onTodoDelete={()=> onTodoDelete(todo.id)}
                                  onTodoComplete={()=> onTodoComplete(todo.id)}/>

                    )}
            </ul>
        );
}

export default TodoList;