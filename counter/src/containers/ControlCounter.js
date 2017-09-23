import React from 'react';
import { connect } from 'react-redux'
import DisplayingCounter from "../components/DisplayingCounter";
import Controller from "../components/controller";
import {increateNumber, decreateNumber, resetCounter} from "../actions/ActionCounter";

let ControlCounter = ({ valuePassToComps, tang, giam }) => {
    return (
        <div>
<<<<<<< HEAD
            <Controller increateNumber={increateNumber} decreateNumber={decreateNumber} />
            <DisplayingCounter value2={value} />
=======
            <Controller increateNumber={tang} decreateNumber={giam} resetCounter={reset}/>
            <DisplayingCounter value={valuePassToComps} />
>>>>>>> 249931300a0e3606ccb6c19c916c460838bb1b53
        </div>
    );
};

const mapStateToProps = state => ({
    valuePassToComps: state.value
});

const mapDispatchToProps = ({
    tang: increateNumber,
    giam: decreateNumber,
    reset: resetCounter
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlCounter)

