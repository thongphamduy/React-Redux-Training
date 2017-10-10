import React from 'react'
import {connect} from 'react-redux'
import EditTodo from "../components/EditTodo";

const mapStateToProps = state => (
    {
        isPopupEdit: state.isPopupEdit
    }
);

export default connect(mapStateToProps,null)(EditTodo)