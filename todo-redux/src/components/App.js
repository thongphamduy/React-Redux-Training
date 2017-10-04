import React from 'react';
import AddTodo from './AddTodo';
import DisplayTodoList from './../containers/DisplayTodoList';
import styles from './TodoStyle.css'

const App = () => {
        return (
            <div className={styles.container}>
                <AddTodo />
                <DisplayTodoList />
            </div>
        );
};

export default App;