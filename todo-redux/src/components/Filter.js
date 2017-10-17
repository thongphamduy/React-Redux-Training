import React from 'react';

const Filter = (props) => {
    return(
        <div>
            <button className="btn btn-outline-info" onClick={props.filterAll}>ALL</button>
            <button className="btn btn-outline-info" onClick={props.filterNew}>NEW</button>
            <button className="btn btn-outline-info" onClick={props.filterCompleted}>COMPLETED</button>
        </div>
    )
}

export default Filter;