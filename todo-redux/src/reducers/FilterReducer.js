const FiterReducer = (state = {all: true, new: false, completed: false}, action) => {
    switch (action.type) {
        case 'FILTER_COMPLETED':
            return Object.assign({}, state, {all: false, new: false, completed: true})
        case 'FILTER_NEW':
            return Object.assign({}, state, {all: false, new: true, completed: false})
        case 'FILTER_ALL':
            return Object.assign({}, state, {all: true, new: false, completed: false})
        default:
            return state
    }
}
export default FiterReducer;