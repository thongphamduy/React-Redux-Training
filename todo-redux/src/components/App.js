import React from 'react';
import AddTodo from '../containers/AddTodo';
import DisplayTodoList from './../containers/DisplayTodoList';
import FilterContainer from '../containers/FilterContainer'
import styles from './TodoList.css'

const App = () => {
        return (
            <div className={`${styles.App}`}>
                <AddTodo />
                <DisplayTodoList />
                <FilterContainer />
            </div>
        );
};

export default App;