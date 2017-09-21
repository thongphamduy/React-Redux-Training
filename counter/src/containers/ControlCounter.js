import React from 'react';
import { connect } from 'react-redux'
import DisplayingCounter from "../components/DisplayingCounter";
import Controller from "../components/controller";
import {increateNumber, decreateNumber} from "../actions/ActionCounter";

let ControlCounter = ({ value, increateNumber, decreateNumber }) => {
    return (
        <div>
            <Controller increateNumber={increateNumber} decreateNumber={decreateNumber} />
            <DisplayingCounter value={value} />
        </div>
    );
}

const mapStateToProps = state => ({
    value: state.value
})

const mapDispatchToProps = ({
    increateNumber,
    decreateNumber
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlCounter)

