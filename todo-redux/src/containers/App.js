import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import {addTodo, deleteTodo, toggleTodo} from "../actions/TodoAction";
import { connect } from 'react-redux';

const App = ({todos, onTodoComplete, onTodoDelete, onTodoAdd}) => {
        return (
            <div>
                <AddTodo onTodoAdd={onTodoAdd}/>
                <TodoList todos={todos} onTodoComplete={onTodoComplete} onTodoDelete={onTodoDelete}/>
            </div>
        );
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    onTodoComplete: toggleTodo,
    onTodoDelete: deleteTodo,
    onTodoAdd: addTodo
};
const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnect;