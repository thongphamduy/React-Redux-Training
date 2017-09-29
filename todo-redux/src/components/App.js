import React from 'react';
import AddTodo from './AddTodo';
// import TodoList from './TodoList';
import DisplayTodoList from './../containers/DisplayTodoList';
import AddTodoContainer from './../containers/AddTodoContainer';
import TodoList from "./TodoList";

const App = () => {
        return (
            <div>
                <AddTodo />
                <DisplayTodoList />
            </div>
        );
};

export default App;