import React from 'react';
import { connect } from 'react-redux'
import DisplayingCounter from "../components/DisplayingCounter";
import Controller from "../components/controller";
import {increateNumber, decreateNumber, resetCounter} from "../actions/ActionCounter";

let ControlCounter = ({ valuePassToComps, tang, giam }) => {
    return (
        <div>
            <Controller increateNumber={tang} decreateNumber={giam} resetCounter={reset}/>
            <DisplayingCounter value={valuePassToComps} />
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

