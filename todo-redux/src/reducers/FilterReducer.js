const FilterReducer = (state = 'FILTER_ALL', action) => {
    console.log("action type", action.type);
    switch (action.type) {
        case 'FILTER_COMPLETED':
            return 'FILTER_COMPLETED'
        case 'FILTER_NEW':
            return 'FILTER_NEW'
        case 'FILTER_ALL':
            return 'FILTER_ALL'
        default:
            return state
    }
};
export default FilterReducer;