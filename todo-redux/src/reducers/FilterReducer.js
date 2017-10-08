const FilterReducer = (state = {filter: 'FILTER_ALL'}, action) => {
    switch (action.type) {
        case 'FILTER_COMPLETED':
            return Object.assign({}, state, {filter: 'FILTER_COMPLETED'});
        case 'FILTER_NEW':
            return Object.assign({}, state, {filter: 'FILTER_NEW'});
        case 'FILTER_ALL':
            return Object.assign({}, state, {filter: 'FILTER_ALL'});
        default:
            return state
    }
};
export default FilterReducer;