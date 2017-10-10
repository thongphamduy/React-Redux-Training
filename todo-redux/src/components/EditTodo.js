import React from 'react'

const EditTodo = (props) => {
    if(props.isPopupEdit) {
        console.log(" 123123123 going to  popup")
        return(
            <div>
                <p>Pop up edit todo</p>
            </div>
        )
    } else {
        return (null);
    }

};

export default EditTodo;