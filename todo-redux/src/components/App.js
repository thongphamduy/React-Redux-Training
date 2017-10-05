import React from 'react';
import AddTodo from '../containers/AddTodo';
import DisplayTodoList from './../containers/DisplayTodoList';
import styles from './TodoStyle.css'

const App = () => {
        return (
            <div className={`${styles.App}`}>
                <AddTodo />
                <DisplayTodoList />
            </div>
        );
};

export default App;