import React from 'react';

let Controller = ({ increateNumber,  decreateNumber }) => {
        return (
            <div>
                <button className="btn btn-primary" onClick={increateNumber}>+</button>
                <button className="btn btn-primary" onClick={decreateNumber}>-</button>
            </div>
        );

}

export default Controller