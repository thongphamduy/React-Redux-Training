import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {addTodo} from "../actions/TodoAction";
import styles from "../components/TodoStyle.css"

class AddTodoInput extends PureComponent {


    onSubmit = (e) => {
        e.preventDefault();

        this.props.onTodoAdd(this.refs.inputText.value);
        this.refs.inputText.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className={`form-inline ${styles.AddTodoForm}`}>
                <input type="text" name="AddTodo" placeholder="Add todo ..." ref="inputText" className="form-control"/>
                <button type="submit" className="btn btn-default">Add Todo</button>
            </form>
        );
    }
}
const mapDispatchToProps = {
        onTodoAdd: addTodo
};

export default connect(null, mapDispatchToProps)(AddTodoInput);
