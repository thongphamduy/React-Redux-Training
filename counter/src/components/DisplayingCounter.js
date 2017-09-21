import React, {Component} from 'react';

class DisplayingCounter extends Component {

    render () {
        return (
            <div>{this.props.number}</div>
        );
    }
}

export default DisplayingCounter;