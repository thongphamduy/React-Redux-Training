import React from 'react';

let Controller = ({ increateNumber,  decreateNumber, resetCounter }) => {
        return (
            <div>
                <button className="btn btn-primary" onClick={increateNumber}>+</button>
                <button className="btn btn-primary" onClick={decreateNumber}>-</button>
                <button className="btn btn-primary" onClick={resetCounter}>Reset</button>
            </div>
        );

};

export default Controller