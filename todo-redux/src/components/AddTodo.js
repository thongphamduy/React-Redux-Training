import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {addTodo} from "../actions/TodoAction";

class AddTodoInput extends PureComponent {


    onSubmit = (e) => {
        e.preventDefault();
        this.props.onTodoAdd(this.refs.inputText.value);
        this.refs.inputText.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="AddTodo" placeholder="Add todo ..." ref="inputText"/>
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}
const mapDispatchToProps = {
        onTodoAdd: addTodo
};

export default connect(null, mapDispatchToProps)(AddTodoInput);
