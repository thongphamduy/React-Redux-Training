import React, {Component} from 'react';

class ControlCounter extends Component {
    render () {
        return (
            <div>
                <button className="btn btn-primary">+</button>
                <button className="btn btn-primary">-</button>
            </div>
        );
    }
}

export default ControlCounter;