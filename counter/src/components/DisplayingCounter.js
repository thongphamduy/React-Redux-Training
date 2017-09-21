import React from 'react';
import {connect} from "react-redux";

let DisplayingCounter = ({value}) => {
    return (
        <div>{value}</div>
    );
};

const mapStateToProps = state => {
    return ({
        value: DisplayingCounter(state.value)
    });
};

export default DisplayingCounter = connect(mapStateToProps)(DisplayingCounter);