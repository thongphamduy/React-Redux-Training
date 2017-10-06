import React, {Component} from 'react';
import Filter from '../components/Filter'

class FilterContainer extends Component {
    constructor (props){
        super(props);
    }

    render () {
        return (
            <Filter/>
        );
    }
}

export default FilterContainer;