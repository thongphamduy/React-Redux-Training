import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addTodo} from "../actions/TodoAction";

class AddTodo extends Component {
    constructor(props) {
        super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.input.value)
        this.props.onTodoAdd(this.input.value);
        this.input.value = '';
    }

    render() {
        let input;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="AddTodo" placeholder="Add todo ..." ref={(input) => this.input = input}/>
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}
const mapDispatchToProps = {
        onTodoAdd: addTodo
};

export default AddTodo =connect(null, mapDispatchToProps)(AddTodo);