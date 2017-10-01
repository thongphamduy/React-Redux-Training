import React from 'react';
import AddTodo from './AddTodo';
import DisplayTodoList from './../containers/DisplayTodoList';

const App = () => {
        return (
            <div>
                <AddTodo />
                <DisplayTodoList />
            </div>
        );
};

export default App;