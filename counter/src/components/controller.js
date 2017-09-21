import React from 'react';
import {connect} from "react-redux";
import {increateNumber, decreateNumber} from "../actions/ActionCounter";

let Controller = ({dispatch}) => {

        return (
            <div>
                <button className="btn btn-primary" onClick={e => {
                    e.preventDefault();
                    dispatch(increateNumber());
                    console.log("dispatched increatement");
                }}>+</button>
                <button className="btn btn-primary" onClick={e => {
                    e.preventDefault();
                    dispatch(decreateNumber());
                }}>-</button>
            </div>
        );

}

export default connect()(Controller);